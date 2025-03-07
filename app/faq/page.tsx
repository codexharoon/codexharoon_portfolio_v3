import React from "react";
import { Metadata } from "next";
import { FaqContent } from "@/components/pages/faq-content";

export const metadata: Metadata = {
  title: "FAQ | Haroon - Full Stack Web Engineer",
  description: "Frequently asked questions about web development services offered by Haroon.",
};

export default function FAQ() {
  return <FaqContent />;
}
