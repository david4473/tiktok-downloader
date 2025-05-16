import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tiktoktodown.com/"),
  icons: {
    icon: "/icon.svg",
  },
  title: {
    default: "TikTok Video Downloader",
    template: "%s | TikTok Video Downloader",
  },
  description:
    "Free online tool to download TikTok videos without watermark in HD quality.",
  keywords: [
    "tiktok downloader",
    "tiktok video downloader",
    "download tiktok videos",
    "tiktok without watermark",
  ],
  authors: [{ name: "enigmae" }],
  creator: "enigmae",
  publisher: "enigmae inc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9029746977530906"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "TikTok Video Downloader",
              description:
                "Free online tool to download TikTok videos without watermark in HD quality.",
              url: "https://www.tiktoktodown.com/",
              applicationCategory: "UtilityApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={[
            "light",
            "dark",
            "pink",
            "pink-dark",
            "blue",
            "blue-dark",
            "green",
            "green-dark",
            "purple",
            "purple-dark",
            "orange",
            "orange-dark",
          ]}
        >
          {children}
          <Analytics />
          <Toaster />
          <GoogleAnalytics gaId="G-YD0DXZEKFK" />
        </ThemeProvider>
      </body>
    </html>
  );
}
