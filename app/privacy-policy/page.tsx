import React from "react";
import { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/pages/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Code x Haroon's portfolio website — the official site of Muhammad Haroon, iOS & macOS developer in Pakistan.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Code x Haroon",
    description: "Privacy policy for Code x Haroon's portfolio website.",
    url: "https://codexharoon.com/privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Code x Haroon",
    description: "Privacy policy for Code x Haroon's portfolio website.",
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}
