import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Soumen Pore — Developer & Builder",
  description: "Portfolio of Soumen Pore, an engineering student and developer exploring full-stack products, thoughtful interfaces, and applied AI.",
  metadataBase: new URL("https://soumen-pore.vercel.app"),
  openGraph: {
    title: "Soumen Pore — Developer & Builder",
    description: "Building useful things for the real world.",
    url: "https://soumen-pore.vercel.app",
    siteName: "Soumen Pore",
    type: "website",
  },
  icons: { icon: "/fav.webp", apple: "/fav.webp", shortcut: "/fav.webp" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-foreground selection:bg-primary/30 selection:text-primary">{children}</body>
    </html>
  )
}
