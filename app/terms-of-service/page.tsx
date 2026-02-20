import React from "react";
import { Metadata } from "next";
import { TermsOfServiceContent } from "@/components/pages/terms-of-service-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Code x Haroon's portfolio website.",
};

export default function TermsOfService() {
  return <TermsOfServiceContent />;
}
