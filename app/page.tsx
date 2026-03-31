import { Suspense } from "react";
import { HomePage } from "@/components/home-page";
import { Metadata } from "next";
import Loading from "./loading";
import { SEO, PERSONAL_INFO } from "@/data/constants";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: PERSONAL_INFO.website,
    siteName: PERSONAL_INFO.brandName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - iOS & macOS Developer in Pakistan`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    creator: "@thecodexharoon",
    images: ["/profile.jpg"],
  },
};

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  );
}
