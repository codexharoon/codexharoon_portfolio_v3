import { AboutMePage } from "@/components/pages/about-me-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Haroon, a passionate Full Stack Web Engineer with over 5 years of experience building exceptional web applications.",
  keywords: ["full stack developer", "web engineer", "react developer", "node.js developer", "javascript expert"],
  alternates: {
    canonical: "/about-me",
  },
  openGraph: {
    title: "About Me | Haroon - Full Stack Web Engineer",
    description: "Learn more about Haroon, a passionate Full Stack Web Engineer with over 5 years of experience building exceptional web applications.",
    url: "https://codexharoon.com/about-me",
  },
};

export default function Page() {
  return <AboutMePage />;
}
