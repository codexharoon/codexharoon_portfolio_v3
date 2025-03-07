import { BlogPage } from "@/components/pages/blog-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and thoughts on web development, design, and technology by Haroon.",
  keywords: ["web development blog", "coding tutorials", "tech articles", "javascript blog", "react tutorials"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Haroon - Full Stack Web Engineer",
    description: "Insights, tutorials, and thoughts on web development, design, and technology by Haroon.",
    url: "https://codexharoon.com/blog",
  },
};

export default function Page() {
  return <BlogPage />;
}
