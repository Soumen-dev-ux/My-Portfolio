"use client"

interface TiltProps {
  children: React.ReactNode
  className?: string
}

export default function Tilt({ children, className = "" }: TiltProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
