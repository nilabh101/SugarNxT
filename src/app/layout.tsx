import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SugarNexus AI | Zero-Touch Manufacturing",
  description: "AI-Driven Cane-to-Bag Automation & Predictive Maintenance for Sugar Mills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
