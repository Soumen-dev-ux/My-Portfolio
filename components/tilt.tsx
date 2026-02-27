"use client"

import { useRef, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

interface TiltProps {
  children: React.ReactNode
  className?: string
}

const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }

export default function Tilt({ children, className = "" }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [isHovering, setIsHovering] = useState(false)

  const xValue = useMotionValue(0)
  const yValue = useMotionValue(0)
  const opacityValue = useMotionValue(0)
  const bgXValue = useMotionValue(0)
  const bgYValue = useMotionValue(0)

  const rotateX = useSpring(xValue, springConfig)
  const rotateY = useSpring(yValue, springConfig)
  const opacity = useSpring(opacityValue, springConfig)
  const backgroundX = useSpring(bgXValue, springConfig)
  const backgroundY = useSpring(bgYValue, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    // Mouse position relative to the element
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate rotation (-15 to 15 degrees)
    const xPct = x / rect.width - 0.5
    const yPct = y / rect.height - 0.5

    xValue.set(yPct * -30) // Invert Y for natural tilt
    yValue.set(xPct * 30)

    // Glow position
    bgXValue.set((x / rect.width) * 100)
    bgYValue.set((y / rect.height) * 100)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    opacityValue.set(1)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    xValue.set(0)
    yValue.set(0)
    opacityValue.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative [transform-style:preserve-3d] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10 hidden sm:block"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${backgroundX.get()}% ${backgroundY.get()}%, rgba(var(--primary), 0.1), transparent 40%)`,
        }}
      />

      {/* Container for content that will "pop" out in 3D */}
      <div className="[transform:translateZ(30px)] h-full">
        {children}
      </div>
    </motion.div>
  )
}
