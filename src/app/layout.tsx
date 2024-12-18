import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
export const metadata: Metadata = {
  title: "Triple Mountains",
  description: "A Project for Triple Mountains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
