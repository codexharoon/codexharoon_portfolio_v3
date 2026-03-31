import { ContactMePage } from "@/components/pages/contact-me-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me — Hire an iOS & macOS Developer",
  description: "Get in touch with Muhammad Haroon for iOS app development, macOS app projects, web development, or freelance software engineering inquiries. Based in Punjab, Pakistan — available worldwide.",
  keywords: ["contact iOS developer", "hire iOS developer Pakistan", "freelance iOS developer", "hire macOS developer", "hire Swift developer", "app development inquiry Pakistan", "software engineer contact"],
  alternates: {
    canonical: "/contact-me",
  },
  openGraph: {
    title: "Contact Me — Hire an iOS & macOS Developer",
    description: "Get in touch with Muhammad Haroon for iOS, macOS, and web development projects. Based in Pakistan, available worldwide.",
    url: "https://codexharoon.com/contact-me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me — Hire an iOS & macOS Developer",
    description: "Get in touch with Muhammad Haroon for iOS, macOS, and web development projects.",
  },
};

export default function Page() {
  return <ContactMePage />;
}
