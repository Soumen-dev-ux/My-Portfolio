"use client"

import AnimatedText from "@/components/animated-text"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[40vh]">
        <AnimatedText text="My Projects" className="text-4xl md:text-5xl font-bold mb-12 justify-center" />

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <a
            href="https://tech-city-tsou.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-10 py-5 text-xl font-bold border border-primary/20 rounded-xl bg-background skeuo hover-glow flex items-center justify-center gap-3 transition-all duration-300 transform group-hover:scale-105"
          >
            Visit Tech City
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
