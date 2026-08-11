import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GsapInitializer from "@/components/gsap-initializer"
import PageTransition from "@/components/page-transition"

export const metadata: Metadata = {
  title: "Soumen Pore",
  description: "Web Resume of Soumen Pore",
  icons: {
    icon: "/fav.webp",
    apple: "/fav.webp",
    shortcut: "/fav.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased text-foreground selection:bg-primary/30 selection:text-primary">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <GsapInitializer />
          <PageTransition>{children}</PageTransition>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
