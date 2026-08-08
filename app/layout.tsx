import type { Metadata } from "next";
import { Geist, Geist_Mono, Charm } from "next/font/google";
import "./globals.css";

const charm = Charm({
  weight: "400",
  variable: "--font-charm-regular",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dogwood Pet Services LLC",
  description:
    "Professional, loving dog boarding and in-home care for every kind of companion in Norman, Oklahoma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${charm.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
