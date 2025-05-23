import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight:["400", "500", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "my portfolio",
  description: "portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSans.className} antialiased bg-black min-h-screen w-full overflow-x-hidden`}
      >
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
