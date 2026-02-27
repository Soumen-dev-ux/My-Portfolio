"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Tilt from "@/components/tilt"
import AnimatedText from "@/components/animated-text"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "🛍️",
    link: "#",
  },
  {
    id: 2,
    title: "Project Management App",
    description:
      "Collaborative project management tool with real-time updates, task tracking, and team collaboration features.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "📋",
    link: "#",
  },
  {
    id: 3,
    title: "AI Chat Application",
    description:
      "AI-powered chatbot with natural language processing, conversation history, and intelligent responses.",
    tech: ["Next.js", "OpenAI API", "React"],
    image: "🤖",
    link: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and performance metrics.",
    tech: ["React", "Chart.js", "Node.js"],
    image: "📊",
    link: "#",
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "Social networking platform with user profiles, messaging, feeds, and real-time notifications.",
    tech: ["Next.js", "WebSocket", "MongoDB"],
    image: "👥",
    link: "#",
  },
  {
    id: 6,
    title: "Mobile App Backend",
    description:
      "RESTful API backend for mobile applications with authentication, database management, and cloud deployment.",
    tech: ["Express.js", "MongoDB", "AWS"],
    image: "📱",
    link: "#",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const itemsPerPage = 3

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - itemsPerPage : prevIndex - 1))
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - itemsPerPage ? 0 : prevIndex + 1))
  }

  // Get visible projects for carousel
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedText text="Featured Projects" className="text-4xl font-bold mb-12 justify-center" />

        <div className="relative">
          {/* Carousel Grid */}
          <div className="relative overflow-hidden min-h-[400px]">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className="grid md:grid-cols-3 gap-6 mb-8 absolute w-full"
              >
                {visibleProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="h-full"
                  >
                    <Tilt className="group h-full w-full">
                      <div className="relative overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 h-full flex flex-col pointer-events-auto">
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl overflow-hidden relative shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300" />
                          <span className="relative z-10 group-hover:scale-125 transition-transform duration-300">
                            {project.image}
                          </span>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-foreground/70 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <a
                            href={project.link}
                            className="inline-block text-primary font-semibold hover:underline transition-colors mt-auto"
                          >
                            View Project →
                          </a>
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-12 md:mt-8 relative z-10">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border border-border hover:bg-primary/10 transition-colors duration-200"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: projects.length - itemsPerPage + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-8" : "bg-border"
                    }`}
                  aria-label={`Go to project group ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-border hover:bg-primary/10 transition-colors duration-200"
              aria-label="Next projects"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
