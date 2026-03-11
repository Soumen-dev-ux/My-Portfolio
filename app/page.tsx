"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import { LogoLoop } from "@/components/LogoLoop"
import { skillCategories } from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Education from "@/components/education"
import ThemeToggle from "@/components/theme-toggle"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const allLogos = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    src: skill.logo,
    alt: skill.name,
  }))
)

export default function Home() {
  return (
    <div>
      <Navigation />
      <ThemeToggle />
      <PageTransition>
        <main>
          <Hero />
          <About />
          <section id="skills" className="py-20 px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Skill</h2>
            <LogoLoop logos={allLogos} />
          </section>
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>
      </PageTransition>
      <Footer />
    </div>
  )
}
