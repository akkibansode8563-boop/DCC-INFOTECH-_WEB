import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://dccinfotech.in" />
        <meta name="theme-color" content="#0d7377" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}