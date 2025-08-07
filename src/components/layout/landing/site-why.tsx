import { Briefcase, Cog, Cpu, Layers, Rocket, Shield } from "lucide-react";

export default function SiteWhy() {
  return (
    <section id="why" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Features
            </div>
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
              Why use{" "}
              <span className="font-bold">
                Trades<span className="text-primary">Wise</span>
              </span>{" "}
              App?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              TradesWise combines powerful features with intuitive design to
              help you manage your trades business more efficiently.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <Cog className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Digital Lease Management</h3>
            <p className="text-muted-foreground text-center">
              Store and manage all your lease documents in one secure place.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <Layers className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Tenant Screening</h3>
            <p className="text-muted-foreground text-center">
              Easily screen and vet potential tenants to find the best fit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Financial Reporting</h3>
            <p className="text-muted-foreground text-center">
              Generate detailed financial reports to stay on top of your
              investments.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Document Management</h3>
            <p className="text-muted-foreground text-center">
              Easily store, share, and access all your property documents.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Detailed Analytics</h3>
            <p className="text-muted-foreground text-center">
              Gain valuable insights into your properties and tenants.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Continuous Innovation</h3>
            <p className="text-muted-foreground text-center">
              We are constantly improving our product to ensure you have access
              to the latest features and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
