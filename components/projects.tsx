"use client"

import { useRouter } from "next/navigation"
import AnimatedText from "@/components/animated-text"

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

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center relative z-10">
        <AnimatedText text="Featured Projects" className="text-4xl md:text-5xl font-bold mb-4 justify-center" />
        <p className="text-foreground/60 text-center max-w-md mb-12">
          A showcase of interactive WebGL applications, decentralized systems, and AI tools.
        </p>

        <div className="grid md:grid-cols-3 gap-8 w-full mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(`/project/${project.id}`)}
              className="cursor-pointer border border-border bg-card p-6 rounded-3xl hover:border-primary/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center text-6xl mb-6">
                  {project.image}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-6 line-clamp-3">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
