import React from "react";
import { Metadata } from "next";
import { FaqContent } from "@/components/pages/faq-content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about native iOS and macOS app development services offered by Haroon.",
};

export default function FAQ() {
  return <FaqContent />;
}
