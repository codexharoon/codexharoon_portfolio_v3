"use client";

import React from "react";
import { Person, WebSite, WithContext } from "schema-dts";
import { PERSONAL_INFO, SOCIAL_LINKS, SEO } from "@/data/constants";

export function JsonLd() {
  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    url: PERSONAL_INFO.website,
    image: `${PERSONAL_INFO.website}/profile.jpg`,
    jobTitle: PERSONAL_INFO.title,
    worksFor: {
      "@type": "Organization",
      name: "TS Technology"
    },
    email: PERSONAL_INFO.email,
    description: SEO.description,
    sameAs: [
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.linkedin,
    ],
    knowsAbout: [
      "Swift",
      "UIKit",
      "SwiftUI",
      "AppKit",
      "Xcode",
      "iOS Development",
      "macOS Development",
      "CoreML",
      "Vision Framework",
      "Core Data",
      "Combine",
      "SPM",
      "CocoaPods",
      "REST APIs",
      "Git",
    ],
    nationality: {
      "@type": "Country",
      name: "Pakistan",
    },
  };

  const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PERSONAL_INFO.brandName,
    url: PERSONAL_INFO.website,
    description: SEO.description,
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
