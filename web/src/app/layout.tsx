import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppSticky } from "@/components/sections/WhatsAppSticky";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TCMS.ai",
  description: "Run your entire transport business from one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} bg-background text-on-surface antialiased`}>
        {children}
                      <WhatsAppSticky
                phone="919876543210"
                message="Hi! I'm interested in your transport management solution."
              />
      </body>
    </html>
  );
}
