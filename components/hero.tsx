"use client"

import Image from "next/image"
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { Sparkles, Terminal, Mail, ChevronDown } from "lucide-react"
import RotatingText from "@/components/RotatingText"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrambleTextPlugin)
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  useGSAP(() => {
    // 1. Profile Picture Scale & Fade
    gsap.from(".hero-avatar-container", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.5)"
    })

    // 2. Animate Hero Title (clean slide up and fade in to prevent gradient visibility issues)
    gsap.from(".hero-title", {
      opacity: 100,
      y: 35,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.2
    })

    // 3. Scramble Subtitle
    gsap.to(".hero-scramble", {
      duration: 1.5,
      scrambleText: {
        text: "Aspiring Software Developer",
        chars: "01X#$@&%<>[]{}*+=_~?",
        revealDelay: 0.6,
        speed: 0.5,
      },
      delay: 0.5
    })

    // 4. CTA buttons and scroll indicator
    gsap.from(".hero-cta", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      delay: 1.2
    })

    gsap.from(".hero-scroll-indicator", {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.out",
      delay: 1.6
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,.20),transparent_38%),linear-gradient(to_bottom,rgba(12,8,16,.1),var(--background))]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-8">
        <div>
          <div className="hero-avatar-container h-32 w-32 md:h-48 md:w-48 rounded-full flex items-center justify-center p-2 relative z-20 group">
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-primary/80">
              <Image
                src="/profile.webp"
                alt="Soumen Pore"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div>
          <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient-animated">Soumen Pore</span>
          </h1>
        </div>

        <p className="geist-900 md:text-2xl text-foreground/80 font-large">
          I am an{' '}
          <RotatingText
            texts={['Aspiring Software Developer', 'Student', 'Freelancer', 'Researcher']}
            mainClassName="geist-900 px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </p>

        <div>
          <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center mt-8">
            {/* View My Work - Solid blue */}
            <button
              onClick={() => scrollToSection("projects")}
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              View My Projects
            </button>

            {/* Get In Touch - Bordered cyan */}
            <button
              onClick={() => scrollToSection("contact")}
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap bg-transparent flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>

            {/* Download Resume - Solid cyan */}
            <a
              href="/public/Soumen_Pore_Resume.pdf"
              download
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Terminal className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={() => scrollToSection("about")}>
        <ChevronDown className="w-6 h-6 text-accent animate-bounce" />
      </div>
    </section>
  )
}
