import { Suspense } from "react";
import { HomePage } from "@/components/home-page";
import { Metadata } from "next";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio of Haroon, a Full Stack Web Engineer specializing in modern web technologies.",
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
