"use client"

import React from "react"

interface SpotlightProps {
  children: React.ReactNode
  className?: string
  color?: string
}

export default function Spotlight({ children, className = "" }: SpotlightProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border bg-card p-6 ${className}`}
    >
      {children}
    </div>
  )
}
