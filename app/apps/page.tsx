import { Metadata } from "next";
import { AppsPage } from "@/app/apps/apps-page";

export const metadata: Metadata = {
    title: "Apps & Projects | Code x Haroon",
    description: "Explore the complete portfolio of iOS, macOS, Web, and Mobile applications built by Muhammad Haroon.",
    alternates: {
        canonical: "/apps",
    },
    openGraph: {
        title: "Apps & Projects | Code x Haroon",
        description: "Explore the complete portfolio of iOS, macOS, Web, and Mobile applications.",
        url: "https://codexharoon.com/apps",
    },
    twitter: {
        card: "summary_large_image",
        title: "Apps & Projects | Code x Haroon",
        description: "Explore the complete portfolio of iOS, macOS, Web, and Mobile applications.",
    },
};

export default function Page() {
    return <AppsPage />;
}
