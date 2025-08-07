"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { initialServices, ServiceProps } from "./data";
import SiteComponentsTitle from "../global/body/site-title";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";
import SiteComponentCard from "./site-card";

export default function SiteServices() {
  const [services] = useState<ServiceProps[]>(initialServices);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(services.map((service) => service.category))),
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <MaxWidthWrapper>
        <div className="container">
          <SiteComponentsTitle
            pill="Features"
            title="All Services"
            subtitle="Discover our most popular massage treatments, carefully crafted to provide the ultimate relaxation experience."
          />
          <div className="grid grid-cols-1 gap-6 py-4">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-white shadow-lg"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* All Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SiteComponentCard services={filteredServices} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
