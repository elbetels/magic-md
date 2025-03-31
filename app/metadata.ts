import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PixelCraft Studios | Creative Digital Solutions',
  description: 'Professional digital solutions including graphic design, logo design, and web development by PixelCraft Studios',
  openGraph: {
    title: 'PixelCraft Studios | Creative Digital Solutions',
    description: 'Professional digital solutions including graphic design, logo design, and web development by PixelCraft Studios',
    url: 'https://pixelcraftstudios-eth.vercel.app',
    siteName: 'PixelCraft Studios',
    images: [
      {
        url: '/portfolio/tech-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'PixelCraft Studios Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelCraft Studios | Creative Digital Solutions',
    description: 'Professional digital solutions including graphic design, logo design, and web development by PixelCraft Studios',
    images: ['/portfolio/tech-logo.jpg'],
  },
} 