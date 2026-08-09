import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import NoiseBackground from "@/components/noise-dark-blue-gradient-with-squares"
import GsapInitializer from"@/components/gsap-initializer"
import PageTransition from "@/components/page-transition"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Soumen Pore",
  description: "Web Resume of Soumen Pore",
  icons: {
    icon: "/public/fav.webp",
    apple: "/public/fav.webp",
    shortcut: "/public/fav.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/fav.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/fav.webp" />
        <link rel="shortcut icon" href="/fav.webp" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body className={`font-sans antialiased text-foreground selection:bg-primary/30 selection:text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <GsapInitializer />
          <div className="z-scene">
          
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
