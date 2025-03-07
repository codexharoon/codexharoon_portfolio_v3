import { ServicesPage } from "@/components/pages/services-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the web development services offered by Haroon, including frontend development, backend engineering, DevOps, and more.",
  keywords: ["web development services", "frontend development", "backend engineering", "devops", "mobile app development", "e-commerce solutions"],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Haroon - Full Stack Web Engineer",
    description: "Explore the web development services offered by Haroon, including frontend development, backend engineering, DevOps, and more.",
    url: "https://codexharoon.com/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
