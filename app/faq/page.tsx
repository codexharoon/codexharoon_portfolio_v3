import React from "react";
import { Metadata } from "next";
import { FaqContent } from "@/components/pages/faq-content";

export const metadata: Metadata = {
  title: "FAQ — iOS & macOS App Development Questions",
  description: "Frequently asked questions about native iOS, macOS, web, and cross-platform app development services offered by Muhammad Haroon in Pakistan. Pricing, timelines, process, and more.",
  keywords: ["iOS development FAQ", "app development questions", "hire iOS developer FAQ", "app development cost Pakistan", "iOS app development process", "macOS app development FAQ"],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ — iOS & macOS App Development Questions",
    description: "Frequently asked questions about app development services by Muhammad Haroon, Pakistan.",
    url: "https://codexharoon.com/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — iOS & macOS App Development Questions",
    description: "Frequently asked questions about app development services by Muhammad Haroon, Pakistan.",
  },
};

export default function FAQ() {
  return <FaqContent />;
}
