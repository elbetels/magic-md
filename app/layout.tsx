import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PixelCraft Studios | Creative Digital Solutions",
  description: "Professional digital solutions including graphic design, logo design, and web development by PixelCraft Studios",
  keywords: "PixelCraft Studios, digital solutions, graphic design, logo design, web development, Ethiopia",
  authors: [{ name: 'PixelCraft Studios' }],
  creator: 'PixelCraft Studios',
  publisher: 'PixelCraft Studios',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pixelcraftstudios.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

import "./globals.css";
import Header from "@/components/Header";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
