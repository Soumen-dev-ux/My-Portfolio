"use client"

import { motion } from "framer-motion"
import AnimatedText from "@/components/animated-text"
import MagicCircle from "@/components/magic-circle"

export const projects: any[] = []

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[40vh]">
        <AnimatedText text="My Projects" className="text-4xl md:text-5xl font-bold mb-12 justify-center" />

        <motion.div
          className="relative group h-64 w-64 sm:h-72 sm:w-72 flex items-center justify-center"
          initial={{ opacity: 0, scale: .55, rotate: -18 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
        >
          <MagicCircle className="scale-[1.35]" />
          <div className="absolute inset-4 rounded-full bg-orange-500/10 blur-xl shadow-[0_0_50px_rgba(249,115,22,.42)]" />
          <a
            href="https://tech-city-tsou.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="spell-button relative px-8 py-5 text-center text-xl font-bold rounded-full flex items-center justify-center gap-3 group-hover:scale-105"
          >
            Visit Tech City
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
