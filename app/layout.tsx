import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jalexmedia.com.au'),
  title: {
    default: "Jalex Media | Digital Marketing Agency Melbourne",
    template: "%s | Jalex Media"
  },
  description:
    "Scale your business with strategic Meta Ads, Google Ads, SEO, web design, and content creation. Get measurable results, not just promises. Based in Melbourne, VIC Australia.",
  keywords: ['digital marketing', 'meta ads', 'facebook ads', 'google ads', 'SEO', 'web design', 'content creation', 'Melbourne', 'Australia', 'marketing agency'],
  authors: [{ name: 'Jalex Media' }],
  creator: 'Jalex Media',
  publisher: 'Jalex Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://jalexmedia.com.au',
    siteName: 'Jalex Media',
    title: 'Jalex Media | Digital Marketing Agency Melbourne',
    description: 'Scale your business with strategic Meta Ads, Google Ads, SEO, web design, and content creation. Get measurable results, not just promises.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Jalex Media - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jalex Media | Digital Marketing Agency Melbourne',
    description: 'Scale your business with strategic Meta Ads, Google Ads, SEO, web design, and content creation.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`dark ${inter.className}`}>{children}</body>
    </html>
  )
}
