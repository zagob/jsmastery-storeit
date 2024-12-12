import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "StoreIt",
  description: "StoreIt - The only storage solution you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${popins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
