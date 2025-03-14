import type { Metadata } from "next";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--plus-jakarta-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Axelon Money",
  description: "Axelon Mobile Banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
