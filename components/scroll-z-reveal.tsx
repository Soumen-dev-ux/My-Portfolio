"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollZRevealProps {
  children: React.ReactNode
  /** How far back in Z space the element starts (negative = behind) */
  zDistance?: number
  /** Starting opacity */
  fromOpacity?: number
  /** Starting scale (1 = no scale, 0.8 = 20% smaller) */
  fromScale?: number
  /** Animation duration in seconds */
  duration?: number
  /** GSAP ease string */
  ease?: string
  /** ScrollTrigger start position */
  start?: string
  /** Additional className for the wrapper */
  className?: string
  /** Whether to also add a subtle rotateX tilt on entry */
  tiltX?: number
}

export default function ScrollZReveal({
  children,
  zDistance = -160,
  fromOpacity = 0,
  fromScale = 0.88,
  duration = 1,
  ease = "power3.out",
  start = "top 88%",
  className = "",
  tiltX = 6,
}: ScrollZRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = wrapperRef.current
      if (!el) return

      gsap.fromTo(
        el,
        {
          opacity: fromOpacity,
          z: zDistance,
          scale: fromScale,
          rotateX: tiltX,
          transformOrigin: "50% 60%",
        },
        {
          opacity: 1,
          z: 0,
          scale: 1,
          rotateX: 0,
          duration,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      )
    },
    { scope: wrapperRef }
  )

  return (
    <div
      ref={wrapperRef}
      className={`${className} z-reveal`}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </div>
  )
}
