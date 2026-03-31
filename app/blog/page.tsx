import { BlogPage } from "@/components/pages/blog-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — iOS, macOS & Swift Development Insights",
  description: "Insights, tutorials, and thoughts on iOS development, macOS apps, Swift programming, and software engineering by Muhammad Haroon from Pakistan.",
  keywords: ["iOS development blog", "Swift tutorials", "macOS development articles", "UIKit tips", "SwiftUI guides", "Apple development blog", "iOS developer Pakistan blog"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — iOS, macOS & Swift Development Insights",
    description: "Insights, tutorials, and thoughts on iOS development, macOS apps, and Swift programming by Muhammad Haroon.",
    url: "https://codexharoon.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — iOS, macOS & Swift Development Insights",
    description: "Insights, tutorials, and thoughts on iOS development, macOS apps, and Swift programming by Muhammad Haroon.",
  },
};

export default function Page() {
  return <BlogPage />;
}
