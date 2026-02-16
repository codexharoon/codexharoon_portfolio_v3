import { Suspense } from "react";
import { HomePage } from "@/components/home-page";
import { Metadata } from "next";
import Loading from "./loading";
import { SEO } from "@/data/constants";

export const metadata: Metadata = {
  title: "Home",
  description: SEO.description,
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  );
}
