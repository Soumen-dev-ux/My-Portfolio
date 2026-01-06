"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const itemsPerPage = 3

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - itemsPerPage : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - itemsPerPage ? 0 : prevIndex + 1))
  }

  // Get visible projects for carousel
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="relative">
          {/* Carousel Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fadeIn"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300" />
                  <span className="relative z-10 group-hover:scale-125 transition-transform duration-300">
                    {project.image}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{project.description}</p>

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
                    className="inline-block text-primary font-semibold hover:underline transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4">
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border"
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
