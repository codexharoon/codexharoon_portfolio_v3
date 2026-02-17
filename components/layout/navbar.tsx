"use client";

import React from "react";
import { Link } from "react-scroll";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeSwitcher } from "../theme/theme-switcher";
import { Icon } from "@iconify/react";
import { NAV_SECTIONS, PERSONAL_INFO } from "@/data/constants";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const isActive = (section: string) => {
    return activeSection === section;
  };

  const handleLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (!isHome) {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <HeroNavbar
      maxWidth="xl"
      className="glass-navbar fixed top-0 z-40 border-none"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div
            className="font-heading font-bold cursor-pointer flex items-center gap-2.5"
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                router.push("/");
              }
              setIsMenuOpen(false);
            }}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-xs font-mono font-bold tracking-tighter shadow-lg shadow-primary/20">
              &lt;/&gt;
            </span>
            <span className="flex items-center gap-0.5">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Code</span>
              <span className="text-gray-400 dark:text-gray-500 font-light mx-0.5">x</span>
              <span className="text-text">Haroon</span>
            </span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {NAV_SECTIONS.map((section) => (
          <NavbarItem key={section.id} isActive={isHome && isActive(section.id)}>
            <Link
              to={section.id}
              spy={true}
              smooth={true}
              duration={800}
              className={`text-sm transition-colors duration-200 cursor-pointer ${isHome && isActive(section.id)
                ? "text-primary font-semibold"
                : "text-gray-500 dark:text-gray-400 hover:text-primary"
                }`}
              onClick={() => handleLinkClick(section.id)}
            >
              {section.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 glass">
        {NAV_SECTIONS.map((section) => (
          <NavbarMenuItem key={section.id}>
            <Link
              to={section.id}
              spy={true}
              smooth={true}
              duration={800}
              className={`w-full block py-2 text-sm ${isHome && isActive(section.id)
                ? "text-primary font-semibold"
                : "text-gray-500 hover:text-primary"
                }`}
              onClick={() => handleLinkClick(section.id)}
            >
              {section.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
