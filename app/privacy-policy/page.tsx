import React from "react";
import { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/pages/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Haroon - Full Stack Web Engineer",
  description: "Privacy policy for Code x Haroon's portfolio website.",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}
