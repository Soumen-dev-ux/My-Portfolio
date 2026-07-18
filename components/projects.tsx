"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import AnimatedText from "@/components/animated-text"
import Smooth3DSlideshow from "@/components/coverflow-gallery"

export const projects = [
  {
    id: 1,
    title: "Cosmic Sandbox",
    description: "A real-time WebGL planetary orbit simulator that allows users to create, destroy, and manipulate gravitational fields and celestial bodies directly in their browser.",
    image: "🪐",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    tech: ["React", "Three.js", "WebGL", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Pulse Sync",
    description: "A decentralized real-time music collaborative workspace. Enables musicians to jam together with low-latency WebRTC peer-to-peer audio streaming and shared synthesisers.",
    image: "🎵",
    coverImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80",
    tech: ["Next.js", "WebRTC", "Socket.io", "Tailwind CSS", "Web Audio API"],
  },
  {
    id: 3,
    title: "Sentient Docs",
    description: "AI-powered document semantic analysis and context search. It digests massive PDF archives, creates Pinecone vector indexes, and exposes a natural language Q&A interface.",
    image: "🧠",
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
    tech: ["Next.js", "OpenAI API", "Pinecone DB", "LangChain", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Vapor Wave IDE",
    description: "A retro-themed web compiler and real-time collaborative editor styled with vaporwave aesthetics. Supports multiple languages with sandboxed Docker execution.",
    image: "💻",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    tech: ["React", "Monaco Editor", "Docker", "Node.js", "Tailwind CSS"],
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
