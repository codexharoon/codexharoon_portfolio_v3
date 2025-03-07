import React from "react";
import { Metadata } from "next";
import { CaseStudiesContent } from "@/components/pages/case-studies-content";

export const metadata: Metadata = {
  title: "Case Studies | Haroon - Full Stack Web Engineer",
  description: "Explore detailed case studies of web development projects completed by Haroon.",
};

export default function CaseStudies() {
  return <CaseStudiesContent />;
}
