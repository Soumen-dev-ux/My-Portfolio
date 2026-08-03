"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Gallery from "@/components/gallery"
import Achievements from "@/components/achievements"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
