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
        <ScrollZReveal zDistance={-200} fromScale={0.85} tiltX={8} duration={1.1}>
          <About />
        </ScrollZReveal>
        <ScrollZReveal zDistance={-180} fromScale={0.87} tiltX={7} duration={1.05} start="top 86%">
          <Skills />
        </ScrollZReveal>
        {/* Projects pins itself for horizontal scrolling. Keeping it outside a
            transformed reveal wrapper prevents the pinned layout from jumping. */}
        <Projects />
        <ScrollZReveal zDistance={-160} fromScale={0.88} tiltX={6} duration={1.0} start="top 87%">
          <Gallery />
        </ScrollZReveal>
        <ScrollZReveal zDistance={-190} fromScale={0.86} tiltX={7} duration={1.1} start="top 86%">
          <Achievements />
        </ScrollZReveal>
        <ScrollZReveal zDistance={-170} fromScale={0.87} tiltX={6} duration={1.05} start="top 87%">
          <Education />
        </ScrollZReveal>
        <ScrollZReveal zDistance={-200} fromScale={0.85} tiltX={8} duration={1.1} start="top 85%">
          <Contact />
        </ScrollZReveal>
      </main>
      <ScrollZReveal zDistance={-120} fromScale={0.92} tiltX={4} duration={0.9} start="top 90%">
        <Footer />
      </ScrollZReveal>
    </div>
  )
}
