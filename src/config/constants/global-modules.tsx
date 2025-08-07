import routes from "./routes";
import {
  LayoutDashboard,
  SettingsIcon,
  Handshake,
  Building,
  Calendar,
  Share2,
  Users,
  Package,
} from "lucide-react";

const modules = {
  navMain: [
    {
      NAME: "Dashboard",
      SINGULAR: "Dashboard",
      HREF: routes.DASHBOARD,
      ICON: LayoutDashboard,
    },
    {
      NAME: "organisations",
      SINGULAR: "organisation",
      HREF: routes.ORGANISATIONS,
      ICON: Building,
    },
    {
      NAME: "clients",
      SINGULAR: "client",
      HREF: routes.CLIENTS,
      ICON: Handshake,
    },
    {
      NAME: "Employees",
      SINGULAR: "Employee",
      HREF: routes.EMPLOYEES,
      ICON: Users,
    },
    {
      NAME: "services",
      SINGULAR: "service",
      HREF: routes.SERVICES,
      ICON: Package,
    },
    {
      NAME: "calendar",
      SINGULAR: "clients",
      HREF: routes.CALENDAR,
      ICON: Calendar,
    },
  ],
  navSecondary: [
    {
      NAME: "public-profile",
      SINGULAR: "public-profile",
      HREF: routes.PUBLICPROFILE,
      ICON: Share2,
    },
    {
      NAME: "Settings",
      SINGULAR: "Clients",
      HREF: routes.SETTINGS,
      ICON: SettingsIcon,
    },

    // {
    //   title: "Get Help",
    //   url: "#",
    //   icon: HelpCircleIcon,
    // },
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: SearchIcon,
    // },
  ],
};

export default modules;
