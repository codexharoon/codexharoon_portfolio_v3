import { AboutMePage } from "@/components/pages/about-me-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Haroon, a passionate iOS & macOS App Developer with expertise in Swift, UIKit, and SwiftUI for building exceptional Apple platform applications.",
  keywords: ["iOS developer", "macOS engineer", "Swift expert", "mobile app developer", "Apple platform specialist"],
  alternates: {
    canonical: "/about-me",
  },
  openGraph: {
    title: "About Me | Haroon - iOS & macOS App Developer",
    description: "Learn more about Haroon, a passionate iOS & macOS App Developer with expertise in Swift, UIKit, and SwiftUI.",
    url: "https://codexharoon.com/about-me",
  },
};

export default function Page() {
  return <AboutMePage />;
}
