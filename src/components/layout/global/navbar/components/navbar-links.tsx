"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/config/constants/navbar-links";

export default function NavBarLinks() {
  const pathname = usePathname();
  const activeIndex = navbarLinks.findIndex((link) => link.href === pathname);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const location = usePathname();
  if (location === "/") {
    return (
      <div className="relative p-2">
        <ul
          className="flex items-center list-none"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navbarLinks.map((link, index) => (
            <li
              key={link.name}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Link
                href={link.href}
                className="relative block px-5 py-2.5 z-10 font-medium text-gray-600 transition-colors hover:text-black"
              >
                {link.name}
              </Link>

              {(hoveredIndex ?? activeIndex) === index && (
                <motion.div
                  layoutId="indicator"
                  className="absolute inset-0 bg-gray-100 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
