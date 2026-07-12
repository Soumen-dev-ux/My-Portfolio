import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"
import ParticlesBackground from "@/components/particles-background"
import SmoothScrolling from "@/components/smooth-scrolling"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollProgress from "@/components/scroll-progress"

export const metadata: Metadata = {
  title: "Soumen Pore",
  description: "Web Resume of Soumen Pore",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased text-foreground selection:bg-primary/30 selection:text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SmoothScrolling>
            <ParticlesBackground />
            <ScrollProgress />
            <CustomCursor />
            {children}
            <Analytics />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  )
}
