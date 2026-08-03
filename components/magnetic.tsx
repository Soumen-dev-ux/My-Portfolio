"use client"

interface MagneticProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function Magnetic({ children, className = "" }: MagneticProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
