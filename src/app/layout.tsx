import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.statusBadge}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — Family Visitation & Safe Exchanges`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans selection:bg-sage-200 selection:text-sage-900">
        {children}
      </body>
    </html>
  );
}
