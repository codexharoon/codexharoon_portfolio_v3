import { MetadataRoute } from "next";

// Add this line to indicate this route is static
// export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Haroon - Full Stack Web Engineer",
    short_name: "Code x Haroon",
    description: "Portfolio of Haroon, a Full Stack Web Engineer specializing in modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#F0F4FF",
    theme_color: "#6A5ACD",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
