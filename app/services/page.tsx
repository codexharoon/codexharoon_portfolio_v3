import { ServicesPage } from "@/components/pages/services-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Development Services | iOS, macOS, Web & Mobile",
  description: "Professional iOS & macOS app development services by Muhammad Haroon, Pakistan. Native Swift apps, web development, cross-platform mobile apps, UI/UX design, API integration, and App Store deployment.",
  keywords: ["iOS app development services", "macOS app development services", "hire iOS developer Pakistan", "Swift app development", "App Store deployment", "web development services Pakistan", "cross-platform app development", "freelance iOS developer", "mobile app development Pakistan", "UI/UX design services"],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "App Development Services | iOS, macOS, Web & Mobile",
    description: "Professional iOS & macOS app development services by Muhammad Haroon, Pakistan. Native Swift apps, web development, and more.",
    url: "https://codexharoon.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Development Services | iOS, macOS, Web & Mobile",
    description: "Professional iOS & macOS app development services by Muhammad Haroon, Pakistan.",
  },
};

export default function Page() {
  return <ServicesPage />;
}
