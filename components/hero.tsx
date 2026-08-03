"use client"

import Image from "next/image"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,.20),transparent_38%),linear-gradient(to_bottom,rgba(12,8,16,.1),var(--background))]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-8">
        <div>
          <div className="h-32 w-32 md:h-48 md:w-48 rounded-full flex items-center justify-center p-2 relative z-20 group">
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-primary/80">
              <Image
                src="/profile.webp"
                alt="Soumen Pore"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient-animated">Soumen Pore</span>
          </h1>
        </div>

        <div>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            I am a <span className="text-primary font-bold drop-shadow-[0_0_8px_#38BDF8]">Full-Stack Developer</span>
          </p>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            {/* View My Work - Solid blue */}
            <a
              href="https://tech-city-tsou.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap flex items-center justify-center"
            >
              View My Work
            </a>

            {/* Get In Touch - Bordered cyan */}
            <button
              onClick={() => scrollToSection("contact")}
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap bg-transparent"
            >
              Get In Touch
            </button>

            {/* Download Resume - Solid cyan */}
            <a
              href="/SoumenPoreResume.pdf"
              download
              className="spell-button px-8 py-3 text-lg rounded-full whitespace-nowrap flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
