import React from "react";
import { Metadata } from "next";
import { TermsOfServiceContent } from "@/components/pages/terms-of-service-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Code x Haroon's portfolio website — the official site of Muhammad Haroon, iOS & macOS developer in Pakistan.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Code x Haroon",
    description: "Terms of service for Code x Haroon's portfolio website.",
    url: "https://codexharoon.com/terms-of-service",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Code x Haroon",
    description: "Terms of service for Code x Haroon's portfolio website.",
  },
};

export default function TermsOfService() {
  return <TermsOfServiceContent />;
}
