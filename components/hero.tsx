"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import MagicCircle from "@/components/magic-circle"

const roles = [
  "Tech Enthusiast",
  "Freelancer",
  "Full-Stack Developer",
  "Reearcher"
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout
    const currentRole = roles[currentRoleIndex]

    const typeSpeed = isDeleting ? 50 : 100
    const delaySpeed = isDeleting ? typeSpeed : (displayText === currentRole ? 2000 : typeSpeed)

    if (!isDeleting && displayText === currentRole) {
      // Pause at the end before deleting
      timer = setTimeout(() => setIsDeleting(true), delaySpeed)
    } else if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      // Type or delete characters
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1)))
      }, typeSpeed)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRoleIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,65,12,.20),transparent_38%),linear-gradient(to_bottom,rgba(12,8,16,.1),var(--background))]" />

      {/* Floating 3D-like Elements */}
      <motion.div
        className="absolute top-1/4 left-[12%] h-32 w-32 rounded-full border border-primary/30 bg-primary/10 blur-[1px]"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[12%] h-40 w-40 rounded-full border border-accent/30 bg-accent/10 blur-[1px]"
        animate={{
          y: [20, -20, 20],
          rotate: [0, -90, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="h-32 w-32 md:h-48 md:w-48 rounded-full flex items-center justify-center p-2 relative z-20 group">
            <MagicCircle />
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-primary/80 transition-all duration-300 animate-spellFlicker">
              <Image
                src="/profile.webp"
                alt="Soumen Pore"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient-animated">Soumen Pore</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-8" // Fixed height to prevent layout shift during typing
        >
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            I am a <span className="text-primary font-bold drop-shadow-[0_0_8px_#F97316] border-r-2 border-primary pr-1 animate-pulse">{displayText}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            {/* View My Work - Scroll to projects */}
            <button
              onClick={() => scrollToSection("projects")}
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap flex items-center justify-center"
            >
              View My Work
            </button>

            {/* Get In Touch - Bordered cyan */}
            <button
              onClick={() => scrollToSection("contact")}
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap bg-transparent"
            >
              Get In Touch
            </button>

            {/* Download Resume - Solid cyan */}
            <a
              href="/SoumenPoreResume.pdf"
              download
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
