import { MetadataRoute } from "next";

// Add this line to indicate this route is static
// export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Haroon • iOS & macOS App Developer",
    short_name: "Code x Haroon",
    description: "Portfolio of Muhammad Haroon, an iOS & macOS App Developer specializing in Swift, UIKit, SwiftUI, and AppKit.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F7",
    theme_color: "#007AFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
