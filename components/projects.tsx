"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Folder, ExternalLink, Code, Layers, Sparkles } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import BorderGlow from "@/components/BorderGlow"

export const projects = [
  {
    id: 1,
    title: "Cosmic Sanctum Dashboard",
    description: "A futuristic holographic control panel for tracking celestial anomalies, dimensional energy spikes, and spell status metrics in real-time.",
    image: "🔮",
    tech: ["Next.js", "Three.js", "WebGL", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Mystic Energy Analytics",
    description: "An interactive analytics suite visualizing rune computation frequencies, mana dissipation graphs, and multi-dimensional portal logs.",
    image: "⚡",
    tech: ["React", "Recharts", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "Sling Ring Portal Navigator",
    description: "A premium booking application mapping interdimensional sling ring portal routes to Kamar-Taj, the Mirror Dimension, and London.",
    image: "🌀",
    tech: ["React", "Lucide React", "Tailwind CSS", "Next.js", "WebAudio API"],
  }
]

export default function Projects() {
  const router = useRouter()
  const triggerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    // Horizontal Scroll only on Desktop (min-width: 768px)
    mm.add("(min-width: 768px)", () => {
      const getScrollDistance = () => {
        const scrollWidth = scrollRef.current?.scrollWidth ?? 0
        const viewportWidth = triggerRef.current?.clientWidth ?? window.innerWidth

        return Math.max(0, scrollWidth - viewportWidth + 120)
      }

      gsap.to(scrollRef.current, {
        x: () => -getScrollDistance(),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          // The portfolio is rendered inside a perspective scene, which creates a
          // containing block for fixed elements. Transform pinning keeps this
          // section stable inside that scene.
          pinType: "transform",
          // A slightly longer catch-up prevents abrupt movement during quick wheel input.
          scrub: 1.6,
          anticipatePin: 1,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
        }
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      })
        .fromTo(
          ".project-intro",
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out" }
        )
        .fromTo(
          ".project-card",
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
          "<0.1"
        )
    })

    return () => mm.revert()
  }, { scope: triggerRef })

  return (
    <section id="projects" ref={triggerRef} className="relative overflow-hidden bg-transparent">
      {/* Background radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center">
        <div
          ref={scrollRef}
          className="flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-12 px-6 md:px-24 py-16 md:py-0 w-full md:w-max h-auto md:h-[600px] will-change-transform"
        >
          {/* Section Info Slide */}
          <div className="project-intro w-full md:w-[380px] flex-shrink-0 flex flex-col justify-center space-y-4 pr-0 md:pr-8">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Creative Works
            </div>
            <AnimatedText text="Featured Projects" className="text-4xl md:text-5xl font-bold tracking-tight text-white" />
            <p className="text-foreground/60 text-base leading-relaxed">
              A premium showcase of interactive WebGL applications, high-performance dashboards, and rune navigators.
            </p>
            <div className="hidden md:flex items-center gap-2 text-primary font-medium text-sm">
              <span>Scroll down to slide</span>
              <span className="animate-pulse">→</span>
            </div>
          </div>

          {/* Project Slide Cards */}
          {projects.map((project) => (
            <BorderGlow
              key={project.id}
              glowColor="198 93 60"
              colors={['#38bdf8', '#22d3ee', '#0284c7']}
              borderRadius={40}
              backgroundColor="#120F17"
              className="project-card cursor-pointer w-full md:w-[420px] flex-shrink-0 h-[480px] rounded-[2.5rem] mystic-panel box-glow hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div
                onClick={() => router.push(`/project/${project.id}`)}
                className="h-full flex flex-col justify-between p-8"
              >
                <div>
                  {/* Project Image Panel */}
                  <div className="aspect-[16/10] bg-primary/10 rounded-2xl flex items-center justify-center text-6xl mb-6 relative overflow-hidden">
                    <span className="relative z-10 select-none">{project.image}</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 opacity-40" />
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 text-white">
                    <Folder className="w-6 h-6 text-primary flex-shrink-0" />
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="text-foreground/75 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {/* Tech Stack Footer */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5" />
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
