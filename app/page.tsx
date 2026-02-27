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
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if dark mode is stored or preferred
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  if (!mounted) return null

  return (
    <div className={isDark ? "dark" : ""}>
      <Navigation />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
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
