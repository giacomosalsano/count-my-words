import type { Metadata } from "next";
import { Geist, Geist_Mono, Galindo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const galindo = Galindo({
  variable: "--font-galindo",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Count My Words",
  description: "Easily count words, sentences, and paragraphs in your text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
