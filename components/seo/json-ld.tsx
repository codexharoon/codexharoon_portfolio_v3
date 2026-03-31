"use client";

import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS, SEO } from "@/data/constants";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    url: PERSONAL_INFO.website,
    image: `${PERSONAL_INFO.website}/profile.jpg`,
    jobTitle: PERSONAL_INFO.title,
    description: SEO.description,
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    worksFor: {
      "@type": "Organization",
      name: "TS Technology",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "National Textile University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Faisalabad",
        addressCountry: "PK",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    nationality: {
      "@type": "Country",
      name: "Pakistan",
    },
    sameAs: [
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.linkedin,
      PERSONAL_INFO.website,
    ],
    knowsAbout: [
      "Swift",
      "UIKit",
      "SwiftUI",
      "AppKit",
      "Xcode",
      "iOS Development",
      "macOS Development",
      "iOS Architecture",
      "macOS Architecture",
      "Mobile App Development",
      "Mobile Architecture",
      "Application Architecture",
      "Software Engineering",
      "CoreML",
      "Vision Framework",
      "Core Data",
      "Combine",
      "SPM",
      "CocoaPods",
      "REST APIs",
      "Git",
      "Web Development",
      "Flutter",
      "Next.js",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "iOS & macOS App Developer",
        occupationLocation: { "@type": "Country", name: "Pakistan" },
        skills: "Swift, UIKit, SwiftUI, AppKit, Xcode, CoreML, Vision, Core Data",
      },
      {
        "@type": "Occupation",
        name: "Mobile Architect",
        occupationLocation: { "@type": "Country", name: "Pakistan" },
        skills: "iOS Architecture, Mobile App Architecture, Application Design Patterns",
      },
      {
        "@type": "Occupation",
        name: "Software Engineer",
        occupationLocation: { "@type": "Country", name: "Pakistan" },
        skills: "Software Engineering, Full Stack Development, Cross-Platform Apps",
      },
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: PERSONAL_INFO.brandName,
    url: PERSONAL_INFO.website,
    image: `${PERSONAL_INFO.website}/profile.jpg`,
    description: SEO.description,
    telephone: PERSONAL_INFO.phone,
    email: PERSONAL_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.4187",
      longitude: "73.0791",
    },
    areaServed: [
      { "@type": "State", name: "Punjab" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Faisalabad" },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Canada" },
    ],
    serviceType: [
      "iOS App Development",
      "macOS App Development",
      "Web Development",
      "Cross-Platform App Development",
      "Android App Development",
      "UI/UX Design",
      "API Integration",
    ],
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: PERSONAL_INFO.name,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PERSONAL_INFO.brandName,
    url: PERSONAL_INFO.website,
    description: SEO.description,
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${PERSONAL_INFO.website}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: PERSONAL_INFO.website,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Apps & Projects",
        item: `${PERSONAL_INFO.website}/apps`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: `${PERSONAL_INFO.website}/services`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${PERSONAL_INFO.website}/contact-me`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
