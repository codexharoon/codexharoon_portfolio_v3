import type { Metadata, Viewport } from "next";
import { HeroUIProvider } from "@heroui/react";
import { Footer } from "@/components/layout/footer";
import { Montserrat, Open_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

// Font configuration with display swap for better performance
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    template: "%s | Haroon - Full Stack Web Engineer",
    default: "Haroon - Full Stack Web Engineer",
  },
  description: "Portfolio of Haroon, a Full Stack Web Engineer specializing in modern web technologies.",
  keywords: ["web development", "full stack", "react", "node.js", "javascript", "portfolio", "next.js"],
  authors: [{ name: "Haroon", url: "https://codexharoon.com" }],
  creator: "Haroon",
  publisher: "Code x Haroon",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://codexharoon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haroon - Full Stack Web Engineer",
    description: "Portfolio of Haroon, a Full Stack Web Engineer specializing in modern web technologies.",
    url: "https://codexharoon.com",
    siteName: "Code x Haroon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haroon - Full Stack Web Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroon - Full Stack Web Engineer",
    description: "Portfolio of Haroon, a Full Stack Web Engineer specializing in modern web technologies.",
    creator: "@thecodexharoon",
    images: ["/images/twitter-image.jpg"],
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
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: "#6A5ACD",
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
      className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-background font-body text-text">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <HeroUIProvider>
          <main>
            {children}
          </main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </HeroUIProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
