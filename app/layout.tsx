import type { Metadata } from "next";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://owenpay.io"),
  title: "OwenPay - Cross-border payouts, instantly",
  description:
    "OwenPay is the modern payouts platform for businesses with contractors and partners across borders. Settle in 60 seconds, save 4-7% per payment.",
  keywords: [
    "stablecoin payments",
    "cross-border payouts",
    "global contractor payments",
    "USDC payments",
    "international freelancer payments",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "256x256" },
  },
  openGraph: {
    title: "OwenPay - Cross-border payouts, instantly",
    description:
      "Pay your global team in seconds, not days. Built on regulated stablecoin infrastructure.",
    url: "https://owenpay.io",
    siteName: "OwenPay",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OwenPay - Pay your global team in seconds, not days.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OwenPay - Cross-border payouts, instantly",
    description:
      "Pay your global team in seconds, not days. Built on regulated stablecoin infrastructure.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1BM9WSHV78"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1BM9WSHV78');
          `}
        </Script>

        {/* Schema.org structured data for AI/search discoverability */}
        <StructuredData />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
