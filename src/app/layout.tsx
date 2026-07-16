import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import CustomCursor from "@/components/motion/CustomCursor";

// next/font: self-hosts fonts, eliminates render-blocking CDN request,
// auto-subsets and preloads only what's needed — zero layout shift.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "DCC Infotech Private Limited | IT Solutions & Services in Pune",
  description:
    "DCC Infotech Private Limited — Trusted IT solutions provider since 1992. Offering IT infrastructure, network solutions, server solutions, AMC services, computer sales, and distribution services in Pune, India.",
  keywords: [
    "DCC Infotech",
    "IT Solutions Pune",
    "IT Infrastructure Services",
    "Network Solution Pune",
    "Server Solution",
    "AMC Services",
    "Computer Sales Pune",
    "Wholesale IT Equipment Dealer",
    "Laptop Service Pune",
    "Corporate IT Services",
  ],
  authors: [{ name: "DCC Infotech Private Limited" }],
  creator: "DCC Infotech",
  publisher: "DCC Infotech Private Limited",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DCC Infotech Private Limited | IT Solutions & Services in Pune",
    description:
      "Trusted IT solutions provider since 1992. IT infrastructure, network solutions, server solutions, AMC services, and more.",
    url: "https://dccinfotech.in",
    siteName: "DCC Infotech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "DCC Infotech Private Limited",
    description:
      "Trusted IT solutions provider since 1992. IT infrastructure, network solutions, server solutions, and more.",
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
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DCC Infotech Private Limited',
  alternateName: 'DCC Infotech',
  url: 'https://dccinfotech.in',
  logo: 'https://dccinfotech.in/dcc-logo.png',
  foundingDate: '1992',
  founder: { '@type': 'Person', name: 'Anil Mhaske' },
  description:
    'Trusted IT solutions provider since 1992 — IT infrastructure, network solutions, server solutions, AMC services, computer sales, and distribution services in Pune, India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '637 Deccan, DCC House, J.M. Road',
    addressLocality: 'Pune',
    postalCode: '411004',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-85980-90100',
    contactType: 'customer service',
    email: 'info@dccinfotech.in',
    areaServed: 'IN',
  },
  sameAs: ['https://www.instagram.com/dccinfotechpvtltd', 'https://www.linkedin.com/company/dcc-infotech-pvt-ltd/'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0d5c5c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Toaster />
        <CustomCursor />
      </body>
    </html>
  );
}