"use client";

import React from "react";
import { Person, WithContext } from "schema-dts";

export function JsonLd() {
  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Haroon",
    url: "https://codexharoon.com",
    image: "https://codexharoon.com/images/profile.jpg",
    jobTitle: "Full Stack Web Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Code x Haroon"
    },
    description: "Full Stack Web Engineer specializing in modern web technologies.",
    sameAs: [
      "https://github.com/codexharoon",
      "https://linkedin.com/in/codexharoon",
      "https://twitter.com/thecodexharoon"
    ],
    knowsAbout: [
      "Web Development",
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Full Stack Development"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
