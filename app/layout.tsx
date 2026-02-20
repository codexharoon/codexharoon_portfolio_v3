import type { Metadata, Viewport } from "next";
import { HeroUIProvider } from "@heroui/react";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/navigation/scroll-to-top";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SEO, PERSONAL_INFO, SOCIAL_LINKS } from "@/data/constants";
import "./globals.css";

// Inter — closest web font to SF Pro
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
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
        alt: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
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
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-background font-body text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: PERSONAL_INFO.name,
                  jobTitle: PERSONAL_INFO.title,
                  url: PERSONAL_INFO.website,
                  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
                  image: `${PERSONAL_INFO.website}/profile.jpg`,
                  description: SEO.description,
                  email: PERSONAL_INFO.email,
                  telephone: PERSONAL_INFO.phone,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: PERSONAL_INFO.location,
                  },
                  knowsAbout: SEO.keywords,
                },
                {
                  "@type": "WebSite",
                  name: PERSONAL_INFO.brandName,
                  url: PERSONAL_INFO.website,
                },
              ],
            }),
          }}
        />
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
