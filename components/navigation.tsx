"use client"

import PillNav, { PillNavItem } from "./PillNav";

const navItems: PillNavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export default function Navigation() {
  return (
    <div className="flex justify-center">
      <PillNav
        baseColor="var(--primary)"
        pillColor="var(--secondary)"
        hoveredPillTextColor="#fff"
        pillTextColor="var(--background)"
        logo="/logo.svg"
        items={navItems}
      />
    </div>
  );
}
