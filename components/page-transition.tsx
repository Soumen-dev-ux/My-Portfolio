"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Flip } from "gsap/Flip"

if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(Flip)
  } catch (e) {
    // plugin may already be registered
  }
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const prevChildrenRef = useRef<React.ReactNode>(children)
  const [prevChildren, setPrevChildren] = useState<React.ReactNode | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // store previous children on each render so we can refer to them when children change
  useEffect(() => {
    prevChildrenRef.current = children
  }, [children])

  useEffect(() => {
    const previous = prevChildrenRef.current
    if (previous === children) return

    // hold previous content visible while we animate between previous and current
    setPrevChildren(previous)
    setIsAnimating(true)

    // allow DOM to render both old and new content
    requestAnimationFrame(() => {
      try {
        const state = Flip.getState(document.querySelectorAll('[data-flip-id]'))

        Flip.from(state, {
          duration: 0.6,
          ease: 'power3.inOut',
          absolute: true,
          onComplete: () => {
            setPrevChildren(null)
            setIsAnimating(false)
          }
        })
      } catch (err) {
        // fallback: simple fade if Flip fails
        const root = document.querySelector('.page-transition-root') as HTMLElement | null
        if (root) {
          gsap.fromTo(root, { opacity: 0 }, { opacity: 1, duration: 0.4 })
        }
        setPrevChildren(null)
        setIsAnimating(false)
      }
    })
  }, [children])

  return (
    <div className="page-transition-root">
      {prevChildren && (
        <div className="page-transition-prev" aria-hidden={true}>
          {prevChildren}
        </div>
      )}

      <div className={`page-transition-current ${isAnimating ? 'animating' : ''}`}>
        {children}
      </div>
    </div>
  )
}

