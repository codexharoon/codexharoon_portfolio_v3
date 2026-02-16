"use client";

import React from "react";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { ScrollDots } from "@/components/navigation/scroll-dots";
import { SocialSidebar } from "@/components/navigation/social-sidebar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
// import { CertificationsSection } from "@/components/sections/certifications-section";
import { WorkSection } from "@/components/sections/work-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Navbar } from "@/components/layout/navbar";
import { JsonLd } from "@/components/seo/json-ld";

export function HomePage() {
  const { activeSection, refs } = useSectionObserver();

  return (
    <div className="min-h-screen bg-background font-body text-text">
      {/* SEO Schema Markup */}
      <JsonLd />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Social media sidebar */}
      <SocialSidebar />

      {/* Main content sections */}
      <HeroSection reference={refs.homeRef.ref} />
      <AboutSection reference={refs.aboutRef.ref} />
      <SkillsSection reference={refs.skillsRef.ref} />
      <WorkSection reference={refs.workRef.ref} />
      {/* <CertificationsSection reference={refs.certificationsRef.ref} /> */}
      <ContactSection reference={refs.contactRef.ref} />

      {/* Navigation dots */}
      <ScrollDots activeSection={activeSection} />
    </div>
  );
}
