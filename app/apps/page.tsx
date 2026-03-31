import { Metadata } from "next";
import { AppsPage } from "@/app/apps/apps-page";

export const metadata: Metadata = {
    title: "Apps & Projects | iOS, macOS & Web Portfolio",
    description: "Explore the complete portfolio of native iOS, macOS, Web, and cross-platform mobile applications built by Muhammad Haroon — an iOS & macOS developer based in Pakistan.",
    keywords: ["iOS apps portfolio", "macOS apps portfolio", "Swift projects", "UIKit apps", "SwiftUI apps", "mobile app portfolio Pakistan", "iOS developer projects"],
    alternates: {
        canonical: "/apps",
    },
    openGraph: {
        title: "Apps & Projects | iOS, macOS & Web Portfolio",
        description: "Explore the complete portfolio of native iOS, macOS, Web, and cross-platform mobile applications built by Muhammad Haroon.",
        url: "https://codexharoon.com/apps",
    },
    twitter: {
        card: "summary_large_image",
        title: "Apps & Projects | iOS, macOS & Web Portfolio",
        description: "Explore the complete portfolio of native iOS, macOS, Web, and cross-platform mobile applications built by Muhammad Haroon.",
    },
};

export default function Page() {
    return <AppsPage />;
}
