"use client";

import { useState } from "react";
import SiteComponentCard from "./site-card";
import SiteComponentsTitle from "../global/body/site-title";
import { initialServices, ServiceProps } from "./data";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";

export default function SiteFeatured() {
  const [services] = useState<ServiceProps[]>(initialServices);
  const featuredServices = services.filter((service) => service.featured);

  return (
    <section id="featured" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <MaxWidthWrapper>
        <div className="container">
          <SiteComponentsTitle
            pill="Features"
            title="Featured Services"
            subtitle="Discover our most popular massage treatments, carefully crafted to provide the ultimate relaxation experience."
          />
          <div className="mx-auto gap-6">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <SiteComponentCard services={featuredServices} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
