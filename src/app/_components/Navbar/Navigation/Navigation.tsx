"use client";

import { usePathname } from "next/navigation";
import NavigationItem from "./NavigationItem";

interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about-us" },
    { label: "Online Banking", href: "/online-banking" },
  ];

  return (
    <ul className="navigation">
      {navItems.map((item) => {
        const active = item.href === pathname;
        return (
          <NavigationItem
            label={item.label}
            href={item.href}
            active={active}
            key={item.href}
          />
        );
      })}
    </ul>
  );
};

export default Navigation;
