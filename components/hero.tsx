"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    // Create a link to your resume (replace with your actual resume URL)
    const resumeUrl = "/resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Soumen_Pore_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent p-1 transform transition-all duration-500 ease-out hover:scale-110"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Soumen Pore</span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 text-balance leading-relaxed">
            A passionate Full Stack Developer crafting elegant solutions to complex problems
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 ease-out">
            Get In Touch
          </button>
          <button
            onClick={handleDownloadResume}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
          >
            Download Resume
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
