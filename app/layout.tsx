import type { Metadata, Viewport } from "next";
import { HeroUIProvider } from "@heroui/react";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/navigation/scroll-to-top";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SEO, PERSONAL_INFO } from "@/data/constants";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

// Neue Machina — Primary Geometric Sans
const neueMachina = localFont({
  src: "../public/fonts/NeueMachina.otf",
  variable: "--font-neue-machina",
  display: "swap",
  preload: true,
});

// Juana — Accent Italic Serif
const juana = localFont({
  src: "../public/fonts/Juana.otf",
  variable: "--font-juana",
  display: "swap",
  preload: true,
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    template: SEO.titleTemplate,
    default: SEO.title,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.website }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.brandName,
  category: "Technology",
  classification: "Portfolio & Software Development Services",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: PERSONAL_INFO.website,
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL(PERSONAL_INFO.website),
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: PERSONAL_INFO.website,
    siteName: PERSONAL_INFO.brandName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} • ${PERSONAL_INFO.title}`,
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Add your verification codes when you have them:
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: SEO.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neueMachina.variable} ${juana.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-background font-body text-text">
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeroUIProvider>
            <main>
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <SpeedInsights />
            <Analytics />
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
