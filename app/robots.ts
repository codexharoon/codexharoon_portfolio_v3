import { MetadataRoute } from "next";

// Add this line to make it compatible with static export
// export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || "https://codexharoon.com";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
