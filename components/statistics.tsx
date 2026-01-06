"use client"

import { useEffect, useState, useRef } from "react"

interface Stat {
  label: string
  value: number
  suffix: string
  duration: number
}

const stats: Stat[] = [
  { label: "Projects Completed", value: 100, suffix: "+", duration: 2000 },
  { label: "Happy Clients", value: 50, suffix: "+", duration: 2000 },
  { label: "Code Commits", value: 5000, suffix: "+", duration: 2000 },
  { label: "Cups of Coffee", value: 500, suffix: "+", duration: 2000 },
]

interface CounterProps extends Stat {
  inView: boolean
}

function Counter({ label, value, suffix, duration, inView }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = value / (duration / 50)
    const interval = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 50)

    return () => clearInterval(interval)
  }, [inView, value, duration])

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-foreground/70">{label}</div>
    </div>
  )
}

export default function Statistics() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">By The Numbers</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
