"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function Magnetic({ children, className = "", intensity = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()

    // Calculate distance from center of element
    const center = { x: left + width / 2, y: top + height / 2 }
    const distance = { x: clientX - center.x, y: clientY - center.y }

    // Apply magnetic pull effect based on intensity
    setPosition({
      x: distance.x * intensity,
      y: distance.y * intensity
    })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
