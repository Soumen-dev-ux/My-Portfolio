"use client"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  return (
    <div className={className}>
      {text}
    </div>
  )
}
