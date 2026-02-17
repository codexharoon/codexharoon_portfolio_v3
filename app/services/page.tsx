import { ServicesPage } from "@/components/pages/services-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the app development services offered by Haroon, including native iOS & macOS apps, Swift migration, and App Store deployment.",
  keywords: ["iOS app development", "macOS app development", "Swift migration", "UI/UX for mobile", "App Store optimization", "custom framework development"],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Haroon - iOS & macOS App Developer",
    description: "Explore the app development services offered by Haroon, including native iOS & macOS apps, Swift migration, and App Store deployment.",
    url: "https://codexharoon.com/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
