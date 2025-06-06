import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dev-shreyash",
  description: "Generated by create next app",
  other: {
    "google-site-verification": "v6xkXx0hm4lXMY25Kptr_yRXJqP04cs7Y49ef0XsCNc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Cursor/>
      </body>
    </html>
  );
}
