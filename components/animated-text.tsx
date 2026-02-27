"use client"

import { motion, Variants } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = "", once = true }: AnimatedTextProps) {
  // Split words first, then characters to handle spacing properly
  const words = text.split(" ")

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
  }

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-[0.25em] whitespace-nowrap">
          {word.split("").map((character, idx) => (
            <motion.span variants={child} key={idx} className="inline-block">
              {character}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  )
}
