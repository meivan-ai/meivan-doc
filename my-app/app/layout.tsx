import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const canonicalBase = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const metadata: Metadata = {
  // Only pin absolute URLs when a real canonical URL exists. Hard-coding localhost here
  // breaks favicons when you open the app via LAN IP or another hostname.
  ...(canonicalBase ? { metadataBase: new URL(canonicalBase) } : {}),
  title: {
    default: "Meivan API Documentation",
    template: "%s - Meivan API",
  },
  description:
    "API marketplace documentation - integrate Meivan services with clear examples and references.",
  icons: {
    icon: "/favicon.png",
  },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            const saved = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const theme = saved === "dark" || saved === "light" ? saved : (prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", theme === "dark");
            document.documentElement.style.colorScheme = theme;
          } catch {}
        `}</Script>
      </head>
      <body className="page-glow flex min-h-full flex-col text-slate-900 dark:text-slate-100">
        <SiteHeader />
        <div className="flex flex-1 flex-col pt-14">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
