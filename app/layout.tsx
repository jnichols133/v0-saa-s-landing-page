import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Jalex Media | Digital Marketing Agency",
  description:
    "Scale your business with strategic Meta Ads, Google Ads, SEO, web design, and content creation. Get measurable results, not just promises.",
    generator: 'v0.app'
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
