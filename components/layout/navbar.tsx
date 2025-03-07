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
import NextLink from "next/link";
import { ThemeSwitcher } from "../theme/theme-switcher";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const sections = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "testimonials", label: "TESTIMONIALS" },
    { id: "work", label: "WORK" },
    { id: "contact", label: "CONTACT" }
  ];
  
  const isActive = (section: string) => {
    return activeSection === section;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeroNavbar 
      maxWidth="xl" 
      className="bg-background fixed top-0 z-40"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            duration={800} 
            className="font-heading font-bold text-primary cursor-pointer"
            onClick={handleLinkClick}
          >
            Code x Haroon
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {sections.map((section) => (
          <NavbarItem key={section.id} isActive={isActive(section.id)}>
            <Link 
              to={section.id} 
              spy={true}
              smooth={true}
              duration={800}
              className={`transition-colors duration-200 cursor-pointer ${isActive(section.id) ? "text-primary font-medium" : "hover:text-primary"}`}
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
      <NavbarMenu className="pt-6">
        {sections.map((section) => (
          <NavbarMenuItem key={section.id}>
            <Link
              to={section.id}
              spy={true}
              smooth={true}
              duration={800}
              className={`w-full block py-2 ${isActive(section.id) ? "text-primary font-medium" : "hover:text-primary"}`}
              onClick={handleLinkClick}
            >
              {section.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
