"use client"

import { useCallback, useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import type { Container, Engine } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (_container?: Container): Promise<void> => {}

  if (!init) return <div className="fixed inset-0 -z-10 bg-background" />

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#fb923c", "#fbbf24", "#fef3c7"],
            },
            links: {
              color: "#f97316",
              distance: 130,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute inset-0 cosmic-vignette pointer-events-none z-10" />
    </div>
  )
}
