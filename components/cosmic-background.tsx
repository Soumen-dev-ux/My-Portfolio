"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import MagicCircle from "@/components/magic-circle"

interface CosmicBackgroundProps {
  particleCount?: number
  glowColor1?: string // Primary glow (Default: Doctor Strange Orange)
  glowColor2?: string // Secondary glow (Default: Dark Orange)
  glowColor3?: string // Accent glow (Default: Spell Yellow)
  className?: string
}

export default function CosmicBackground({
  particleCount = 60,
  glowColor1 = "#F97316",
  glowColor2 = "#EA580C",
  glowColor3 = "#FACC15",
  className = "",
}: CosmicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  // Mouse parallax motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 })

  // Keep track of mouse position for canvas particles
  const mouseRef = useRef({ x: 0, y: 0, active: false, speed: 0, lastX: 0, lastY: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse positions (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(x * 30) // Max offset of 30px
      mouseY.set(y * 30)

      // Update position for spark trails
      const dx = e.clientX - mouseRef.current.lastX
      const dy = e.clientY - mouseRef.current.lastY
      const speed = Math.sqrt(dx * dx + dy * dy)

      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
        speed,
        lastX: e.clientX,
        lastY: e.clientY,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mouseX, mouseY])

  // Canvas particle system logic
  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    // Particle design details
    interface Particle {
      x: number
      y: number
      size: number
      vx: number
      vy: number
      alpha: number
      fadeSpeed: number
      color: string
      glow: boolean
      isSpark?: boolean
      gravity?: number
      friction?: number
      isText?: boolean
      text?: string
    }

    const particles: Particle[] = []
    const particleColors = [glowColor1, glowColor2, glowColor3, "#FAFAFA", "#FAFAFA"]

    // Initialize background particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1, // Slight upward drift
        alpha: Math.random() * 0.5 + 0.1,
        fadeSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        glow: Math.random() > 0.6,
      })
    }

    // Initialize floating glowing neon role glyph tags in background
    const rolesList = ["CODER", "PRESENTER", "LEADER", "HACKER"]
    for (let r = 0; r < rolesList.length; r++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15 - 0.05,
        alpha: Math.random() * 0.4 + 0.3,
        fadeSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        color: [glowColor1, glowColor2, glowColor3][r % 3],
        glow: true,
        isText: true,
        text: rolesList[r],
      })
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Emit spark trail particles when mouse is active and moving
      if (mouseRef.current.active && mouseRef.current.speed > 1) {
        // Emit more sparks depending on mouse speed
        const sparksToEmit = Math.min(3, Math.floor(mouseRef.current.speed / 4) + 1)
        for (let j = 0; j < sparksToEmit; j++) {
          const angle = Math.random() * Math.PI * 2
          const speed = Math.random() * 2 + 0.5
          particles.push({
            x: mouseRef.current.x,
            y: mouseRef.current.y,
            size: Math.random() * 2.5 + 1.2,
            vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.5,
            vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.5 - 0.5, // Emitted upwards/sideways
            alpha: 1.0, // Start fully bright
            fadeSpeed: -0.015 - Math.random() * 0.012, // Fade out quickly
            color: [glowColor1, glowColor2, glowColor3][Math.floor(Math.random() * 3)],
            glow: true,
            isSpark: true,
            gravity: 0.04, // Slowly fall like a real sparkler
            friction: 0.98, // Slow down
          })
        }
        // Decay mouse speed in ref so it doesn't loop emit when static
        mouseRef.current.speed *= 0.8
      }

      // 2. Update and draw all particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // Update spark physics
        if (p.isSpark) {
          if (p.friction) {
            p.vx *= p.friction
            p.vy *= p.friction
          }
          if (p.gravity) {
            p.vy += p.gravity
          }
        }

        // Update positions
        p.x += p.vx
        p.y += p.vy

        // Spark particles fade out and get removed, background particles twinkle
        p.alpha += p.fadeSpeed

        if (p.isSpark) {
          if (p.alpha <= 0) {
            particles.splice(i, 1) // Remove dead sparks
            continue
          }
        } else if (p.isText) {
          // Twinkle/flicker effect for role tags
          if (p.alpha <= 0.1 || p.alpha >= 0.9) {
            p.fadeSpeed = -p.fadeSpeed
          }
          p.alpha = Math.max(0.05, Math.min(0.9, p.alpha))

          // Random sudden neon surge (flicker)
          if (Math.random() > 0.99) {
            p.alpha = Math.random() * 0.4 + 0.6
          }

          // Reset off-screen text particles
          if (p.x < -100) p.x = width + 100
          if (p.x > width + 100) p.x = -100
          if (p.y < -50) p.y = height + 50
          if (p.y > height + 50) p.y = -50
        } else {
          // Twinkle effect for background stars
          if (p.alpha <= 0.1 || p.alpha >= 0.8) {
            p.fadeSpeed = -p.fadeSpeed // Reverse fading direction
          }
          p.alpha = Math.max(0.05, Math.min(0.85, p.alpha))

          // Reset off-screen background particles
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0
        }

        // Draw particle/text
        if (p.isText && p.text) {
          ctx.font = `bold ${Math.max(10, width * 0.008 + 8)}px "Outfit", "Inter", sans-serif`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"

          if (p.glow) {
            ctx.shadowBlur = 18
            ctx.shadowColor = p.color
          } else {
            ctx.shadowBlur = 0
          }

          // Sudden neon text fill
          ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${p.alpha * 0.85})`
          ctx.fillText(p.text, p.x, p.y)

          // Delicate golden circle spell overlay
          ctx.strokeStyle = `rgba(${hexToRgb(p.color)}, ${p.alpha * 0.45})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(p.x, p.y, ctx.measureText(p.text).width / 2 + 10, 0, Math.PI * 2)
          ctx.stroke()
          
          ctx.shadowBlur = 0
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

          if (p.glow) {
            ctx.shadowBlur = p.size * 6
            ctx.shadowColor = p.color
          } else {
            ctx.shadowBlur = 0
          }

          ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${p.alpha})`
          ctx.fill()
        }
      }

      // Reset shadow blur
      ctx.shadowBlur = 0

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mounted, particleCount, glowColor1, glowColor2, glowColor3])

  // Helper function to convert Hex to RGB
  function hexToRgb(hex: string): string {
    const cleanHex = hex.replace("#", "")
    const bigint = parseInt(cleanHex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r}, ${g}, ${b}`
  }

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none -z-20 bg-[#09090B] ${className}`}>
      {/* Slow Animated Glowing Cosmic Fog (Nebula shapes) */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[130px] opacity-[0.14]"
        style={{
          backgroundColor: glowColor1,
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1.05, 1],
          opacity: [0.12, 0.18, 0.14, 0.10, 0.12],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-[0.10]"
        style={{
          backgroundColor: glowColor2,
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1.1, 0.9, 1.05, 0.95, 1.1],
          opacity: [0.08, 0.13, 0.10, 0.07, 0.08],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[15%] w-[45vw] h-[45vw] rounded-full blur-[120px] opacity-[0.08]"
        style={{
          backgroundColor: glowColor3,
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [0.95, 1.1, 1, 0.9, 0.95],
          opacity: [0.06, 0.09, 0.07, 0.05, 0.06],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large Slowly Rotating Background Magic Circle */}
      <div className="absolute top-[10%] left-[5%] w-[70vw] h-[70vw] max-w-[500px] max-h-[500px] opacity-[0.025] pointer-events-none z-0">
        <MagicCircle />
      </div>

      <div className="absolute bottom-[5%] right-[5%] w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] opacity-[0.02] pointer-events-none z-0 scale-75">
        <MagicCircle />
      </div>

      {/* Lightweight HTML Canvas for Twinkling Cosmic Spark Particles and Interactive Cursor Trails */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block opacity-85" />

      {/* Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#09090b]/80" />
    </div>
  )
}
