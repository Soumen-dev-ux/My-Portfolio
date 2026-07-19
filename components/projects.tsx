"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import AnimatedText from "@/components/animated-text"
import Smooth3DSlideshow from "@/components/coverflow-gallery"

export const projects = [
  {
    id: 1,
    title: "Cosmic Sanctum Dashboard",
    description: "A futuristic holographic control panel for tracking celestial anomalies, dimensional energy spikes, and spell status metrics in real-time.",
    image: "🔮",
    coverImage: "/cosmic_dashboard.png",
    tech: ["Next.js", "Three.js", "WebGL", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Mystic Energy Analytics",
    description: "An interactive analytics suite visualizing rune computation frequencies, mana dissipation graphs, and multi-dimensional portal logs.",
    image: "⚡",
    coverImage: "/mystic_analytics.png",
    tech: ["React", "Recharts", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "Sling Ring Portal Navigator",
    description: "A premium booking application mapping interdimensional sling ring portal routes to Kamar-Taj, the Mirror Dimension, and London.",
    image: "🌀",
    coverImage: "/portal_navigator.png",
    tech: ["React", "Lucide React", "Tailwind CSS", "Next.js", "WebAudio API"],
  }
]

export default function Projects() {
  const router = useRouter()
  const [cardSize, setCardSize] = useState({ width: 500, height: 350 })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardSize({ width: 320, height: 220 })
      } else if (window.innerWidth < 1024) {
        setCardSize({ width: 440, height: 300 })
      } else {
        setCardSize({ width: 520, height: 360 })
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const slides = projects.map((p) => ({
    image: { src: p.coverImage, alt: p.title },
    title: p.title,
  }))

  const handleCardClick = (index: number) => {
    router.push(`/project/${projects[index].id}`)
  }

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[60vh] relative z-10">
        <AnimatedText text="Featured Projects" className="text-4xl md:text-5xl font-bold mb-4 justify-center" />
        <p className="text-foreground/60 text-center max-w-md mb-12">
          A showcase of interactive WebGL applications, decentralized systems, and AI tools.
        </p>

        <div className="w-full flex items-center justify-center min-h-[400px]">
          <Smooth3DSlideshow
            slides={slides}
            cardWidth={cardSize.width}
            cardHeight={cardSize.height}
            radius={8}
            tilt={8}
            sideTilt={8}
            gap={6}
            opacity={50}
            autoplay={false}
            onCardClick={handleCardClick}
          />
        </div>

        <motion.p 
          className="text-sm text-foreground/40 mt-8 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>💡 Click active card to view details</span>
          <span>•</span>
          <span>⌨️ Use Left / Right arrows to rotate</span>
        </motion.p>
      </div>
    </section>
  )
}
