"use client"

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
import ScrollZReveal from "@/components/scroll-z-reveal"

export default function Home() {
  return (
    <div style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}>
      <Navigation />
      <main>
        <Hero />
        <ScrollZReveal zDistance={-140} fromScale={0.96} tiltX={4} duration={0.8} start="top 88%">
          <About />
        </ScrollZReveal>
        <ScrollZReveal zDistance={-130} fromScale={0.96} tiltX={3} duration={0.8} start="top 86%">
          <Skills />
        </ScrollZReveal>
        {/* Projects pins itself for horizontal scrolling. Keeping it outside a
            transformed reveal wrapper prevents the pinned layout from jumping. */}
        <Projects />
        <ScrollZReveal zDistance={-120} fromScale={0.97} tiltX={3} duration={0.75} start="top 87%">
          <Gallery />
        </ScrollZReveal>
        <ScrollZReveal zDistance={-125} fromScale={0.96} tiltX={3} duration={0.8} start="top 86%">
          <Achievements />
        </ScrollZReveal>
        <ScrollZReveal zDistance={-120} fromScale={0.97} tiltX={3} duration={0.75} start="top 87%">
          <Education />
        </ScrollZReveal>
        <ScrollZReveal zDistance={-110} fromScale={0.98} tiltX={2} duration={0.7} start="top 92%">
          <Contact />
        </ScrollZReveal>
      </main>
      <ScrollZReveal zDistance={-80} fromScale={0.98} tiltX={1} duration={0.65} start="top 90%">
        <Footer />
      </ScrollZReveal>
    </div>
  )
}
