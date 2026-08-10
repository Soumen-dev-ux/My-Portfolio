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
    title: "Fresh & Fast",
    description: "Full-stack canteen ordering platform for seamless food ordering and order management.",
    image: "😋",
    imageSrc: "/placeholder.svg",
    category: "Project",
    year: "2025",
    tech: ["HTML5","CSS3","JS", "Firebase"],
    link: "https://fresh-and-fast.netlify.app/"
  },
  {
    id: 2,
    title: "SupplySathi",
    description: "Supplier discovery and connectivity platform designed to simplify business sourcing.",
    image: "⚡",
    imageSrc: "/placeholder.svg",
    category: "Project",
    year: "2025",
    tech: ["HTML5","CSS3","JS", "Local"],
    link: "https://supply-sathi.netlify.app/"
  },
  {
    id: 3,
    title: "ThinkArena",
    description: "Interactive learning and problem-solving platform built around knowledge sharing and challenges.",
    image: "🧠",
    imageSrc: "/placeholder.svg",
    category: "Hackathon",
    year: "2025",
    tech: ["HTML5","CSS3","JS","Local"],
    link: "https://thinkarenaa.netlify.app/"
  },
  {
    id: 4,
    title: "EduRova",
    description: "Educational platform focused on accessible learning resources and interactive experiences.",
    image: "🧑🏻‍🎓",
    imageSrc: "/placeholder.svg",
    category: "Project",
    year: "2026",
    tech: ["MongoDB","Stripe","React","NodeJS", "FireBase", "Express", "JWT","..."],
    link: "https://edurova.vercel.app/"
  },
  {
    id: 5,
    title: "DishCovery",
    description: "Recipe discovery platform for finding recipes based on ingredients and food preferences.",
    image: "🧑🏻‍🍳",
    imageSrc: "/placeholder.svg",
    category: "Project",
    year: "2026",
    tech: ["HTML5","CSS3","JS","TheMealDB","BootStrap"],
    link: "http://techie-sou.me/DishCovery/"
  },
  {
    id: 5,
    title: "AgriGuard",
    description: "AI-powered plant disease detection platform with multilingual agricultural guidance.",
    image: "🌾",
    imageSrc: "/placeholder.svg",
    category: "Project",
    year: "2026",
    tech: ["React", "Node", "Gemini"],
    link: "https://agri-guard-tsou.vercel.app/"
  },
  {
    id: 5,
    title: "Expense Tracker",
    description: "Personal finance dashboard for tracking income, expenses, and spending patterns.",
    image: "💸",
    imageSrc: "/placeholder.svg",
    category: "Hackathon",
    year: "2026",
    tech: ["React", "Redux", "Local"],
    link: "https://expense-tracker-rho-two-45.vercel.app/"
  },
  {
    id: 5,
    title: "AI-Based Plant Disease Detection",
    description: "Research focused on applying machine learning and computer vision techniques to detect plant diseases from crop images and support accessible, technology-driven agricultural decision-making.",
    image: "📃",
    imageSrc: "/placeholder.svg",
    category: "Research Paper",
    year: "2026",
    tech: ["Research Paper"],
    link: "https://docs.google.com/document/d/1eLtECU6W1msy6VW_5v7iJE17Ql8d5W_X2wRgBqq6jxk/edit?usp=sharing"
  },
  {
    id: 5,
    title: "Machine Learning in Cybersecurity",
    description: "Research exploring the application of machine learning techniques in cybersecurity for detecting anomalous behavior, identifying potential threats, and improving automated security monitoring.",
    image: "📃",
    imageSrc: "/placeholder.svg",
    category: "Project",
    year: "2026",
    tech: ["Research Paper"],
    link: "https://docs.google.com/document/d/1LTJZ7C6zydkyiR_Ez92uoMwLyuYDaW9e3bClAHpPDCc/edit?usp=sharing"
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
          end: "bottom 20%",
          scrub: 0.8,
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
                onClick={() => router.push(`${project.link}`)}
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
