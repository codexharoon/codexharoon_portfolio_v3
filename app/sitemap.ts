import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || "https://codexharoon.com";
  
  const routes = [
    "",
    "/about-me",
    "/services",
    "/blog",
    "/contact-me",
    "/case-studies",
    "/privacy-policy",
    "/terms-of-service",
    "/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
