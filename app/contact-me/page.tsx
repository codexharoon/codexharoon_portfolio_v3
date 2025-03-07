import { ContactMePage } from "@/components/pages/contact-me-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Haroon for project inquiries, collaborations, or just to say hello.",
  keywords: ["contact", "hire developer", "freelance web developer", "project inquiry", "web development services"],
  alternates: {
    canonical: "/contact-me",
  },
  openGraph: {
    title: "Contact Me | Haroon - Full Stack Web Engineer",
    description: "Get in touch with Haroon for project inquiries, collaborations, or just to say hello.",
    url: "https://codexharoon.com/contact-me",
  },
};

export default function Page() {
  return <ContactMePage />;
}
