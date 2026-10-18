import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GsapInitializer from "@/components/gsap-initializer"
import PageTransition from "@/components/page-transition"

export const metadata: Metadata = {
  title: "Soumen Pore",
  description: "Web Resume of Soumen Pore. He is from Shyampur, Howrah, WestBengal. His date of Birth is 1st  September of 2006. He completed his Secondary or 10th schooling from `Dehimondalghat High School` and Higher Secodary or 12th from `Anantapur Siddheswari High School`. He has named a research paper , a journal and a patent.",
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
