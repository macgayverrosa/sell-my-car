"use client";

import { usePathname } from "next/navigation";
import { navbarLinks } from "@/config/constants/navbar-links";
import { LinkWrapper } from "@/components/shared/wrappers/link-wrapper";

export default function NavBarLinks() {
  const location = usePathname();
  if (location === "/") {
    return (
      <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
        {navbarLinks.map((item) => (
          <LinkWrapper href={item.href} key={item.name} variant="ghost">
            {item.name}
          </LinkWrapper>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
