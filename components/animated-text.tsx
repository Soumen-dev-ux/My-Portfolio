"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger)
}

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const split = new SplitText(".animated-chars", { type: "chars,words" })
      gsap.set(split.chars, {
        opacity: 0,
        y: 28,
        rotateX: -24,
      })

      gsap.to(split.chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.012,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          end: "bottom 70%",
          scrub: 0.7,
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="overflow-hidden py-1">
      <div className={`animated-chars ${className}`}>
        {text}
      </div>
    </div>
  )
}
