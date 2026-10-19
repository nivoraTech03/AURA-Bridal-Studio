import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.businessName} | Luxury Editorial Bridal Makeup Artist Delhi NCR`,
    template: `%s | ${SITE_CONFIG.businessName}`,
  },
  description: SITE_CONFIG.shortDescription,
  keywords: [
    "Bridal Makeup Delhi",
    "Luxury Bridal Makeup Artist",
    "HD Bridal Makeup",
    "Airbrush Makeup Delhi NCR",
    "Wedding Makeup Artist Mehrauli",
    "Ananya Sharma Makeup Artist",
    "Destination Wedding Makeup India",
    "Aura Bridal Studio",
  ],
  authors: [{ name: SITE_CONFIG.artistName }],
  creator: SITE_CONFIG.artistName,
  publisher: SITE_CONFIG.businessName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.domain,
    title: `${SITE_CONFIG.businessName} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.shortDescription,
    siteName: SITE_CONFIG.businessName,
    images: [
      {
        url: "/images/hero_bride.jpg",
        width: 1200,
        height: 675,
        alt: `${SITE_CONFIG.businessName} - Signature Bridal Look`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.businessName} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.shortDescription,
    images: ["/images/hero_bride.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE_CONFIG.businessName,
    image: `${SITE_CONFIG.domain}/images/hero_bride.jpg`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.domain,
    description: SITE_CONFIG.shortDescription,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.state,
      postalCode: "110030",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5244,
      longitude: 77.1855,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#1C1614]">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
