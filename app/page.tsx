"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Education from "@/components/education"
import ThemeToggle from "@/components/theme-toggle"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <div>
      <Navigation />
      <ThemeToggle />
      <PageTransition>
        <main>
          <Hero />
          <About />
          <Skills />
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
