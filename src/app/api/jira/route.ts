import { NextResponse } from "next/server";

async function fetchJira(path: string, options: RequestInit = {}) {
  const { JIRA_BASE_URL, JIRA_USER_EMAIL, JIRA_API_TOKEN } = process.env;

  if (!JIRA_BASE_URL || !JIRA_USER_EMAIL || !JIRA_API_TOKEN) {
    throw new Error("Jira environment variables are not configured.");
  }

  const authToken = Buffer.from(
    `${JIRA_USER_EMAIL}:${JIRA_API_TOKEN}`,
  ).toString("base64");

  const response = await fetch(`${JIRA_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Basic ${authToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Jira API Error (${path}): ${response.status} ${errorText}`);
    throw new Error(`Failed to fetch data from Jira. Status: ${response.status}`);
  }

  return response.json();
}

function processIssues(issues: any[]) {
  const reports = {
    unassignedIssues: [] as any[],
    ticketsByPerson: {} as Record<string, number>,
    ticketsByStatus: {} as Record<string, number>,
    totalPendingSeconds: 0,
    totalCompletedSeconds: 0,
    completedTicketsByAssignee: {} as Record<string, number>,
    pendingHoursByAssignee: {} as Record<string, number>,
    completedHoursByAuthor: {} as Record<string, number>,
    totalIssues: issues.length,

    // all tickets without estimate
    ticketsWithoutEstimate: [] as any[],
    countTicketsWithoutEstimate: 0,

    // all tickets Closed or Done
    countDoneAndClosed: 0,
  };

  for (const issue of issues) {
    const assignee = issue.fields.assignee;
    const statusName = issue.fields.status.name;
    const remainingSeconds = issue.fields.timetracking?.remainingEstimateSeconds || 0;
    const closedStatuses = ['Done', 'Close'];

    if (!assignee) reports.unassignedIssues.push(issue);
    if (assignee && statusName !== 'Done') reports.ticketsByPerson[assignee.displayName] = (reports.ticketsByPerson[assignee.displayName] || 0) + 1;
    reports.ticketsByStatus[statusName] = (reports.ticketsByStatus[statusName] || 0) + 1;
    reports.totalPendingSeconds += remainingSeconds;

    if (issue.fields.worklog) {
      for (const log of issue.fields.worklog.worklogs) {
        reports.totalCompletedSeconds += log.timeSpentSeconds || 0;
        const authorName = log.author.displayName;
        reports.completedHoursByAuthor[authorName] = (reports.completedHoursByAuthor[authorName] || 0) + (log.timeSpentSeconds || 0);
      }
    }

    if (assignee) {
      // if (remainingSeconds > 0 && statusName !== 'Done') {
      //   reports.pendingHoursByAssignee[assignee.displayName] = (reports.pendingHoursByAssignee[assignee.displayName] || 0) + remainingSeconds;
      // }

      if (remainingSeconds > 0 && !closedStatuses.includes(statusName)) {
        reports.pendingHoursByAssignee[assignee.displayName] = (reports.pendingHoursByAssignee[assignee.displayName] || 0) + remainingSeconds;
      }


      if (statusName === 'Done') {
        reports.completedTicketsByAssignee[assignee.displayName] = (reports.completedTicketsByAssignee[assignee.displayName] || 0) + 1;
      }

    }

    // all tickets without estimate
    const hasOriginalEstimate = (issue.fields.timetracking?.originalEstimateSeconds || 0) > 0;
    if (!hasOriginalEstimate) {
      reports.ticketsWithoutEstimate.push(issue);
      reports.countTicketsWithoutEstimate++;
    }

    // all tickets Closed or Done
    if (closedStatuses.includes(statusName)) {
      reports.countDoneAndClosed++;
    }

  }

  // Convert seconds to hours
  const toHours = (seconds: number) => seconds / 3600;
  Object.keys(reports.completedHoursByAuthor).forEach(name => reports.completedHoursByAuthor[name] = toHours(reports.completedHoursByAuthor[name]));
  Object.keys(reports.pendingHoursByAssignee).forEach(name => reports.pendingHoursByAssignee[name] = toHours(reports.pendingHoursByAssignee[name]));

  return {
    ...reports,
    totalPendingHours: toHours(reports.totalPendingSeconds),
    totalCompletedHours: toHours(reports.totalCompletedSeconds),
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const projectKey = searchParams.get("projectKey");

  if (!projectKey) {
    return NextResponse.json({ error: "Project key is required." }, { status: 400 });
  }

  try {
    // Find board and active sprint first
    const boardData = await fetchJira(`/rest/agile/1.0/board?projectKeyOrId=${projectKey}`);
    const board = boardData.values?.[0];
    if (!board) return NextResponse.json({ error: "No board found" }, { status: 404 });

    const sprintData = await fetchJira(`/rest/agile/1.0/board/${board.id}/sprint?state=active`);
    const sprint = sprintData.values?.[0];
    if (!sprint) return NextResponse.json({ error: "No active sprint found" }, { status: 404 });

    // Define options for the two JQL queries
    const fields = [
      "status", 
      "assignee", 
      "summary", 
      "worklog", 
      "timetracking", 
      "issuetype"
    ];
    const sprintJql = `sprint = ${sprint.id}`;
    const projectJql = `project = '${projectKey}'`;
    
    const searchOptions = (jql: string) => ({
        method: 'POST',
        body: JSON.stringify({ jql, fields, maxResults: 1000 }),
    });

    // Run fetches for both project and sprint in parallel
    const [projectIssuesData, sprintIssuesData] = await Promise.all([
        fetchJira(`/rest/api/3/search`, searchOptions(projectJql)),
        fetchJira(`/rest/api/3/search`, searchOptions(sprintJql))
    ]);
    
    // Process each dataset
    const projectReports = processIssues(projectIssuesData.issues);
    const sprintReports = processIssues(sprintIssuesData.issues);

    const payload = {
        projectData: { reports: projectReports },
        sprintData: { sprintDetails: sprint, reports: sprintReports },
        timestamp: new Date().toISOString(),
    };

    return NextResponse.json(payload);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}