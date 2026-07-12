"use client"

import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-[#110b10]/75 backdrop-blur-xl border-b border-orange-300/15 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-orange-300 drop-shadow-[0_0_10px_rgba(251,146,60,.8)]">
              SP
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">Soumen Pore</p>
              <p className="text-xs text-foreground/60">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/70 hover:text-orange-200 transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col space-y-1.5 p-2">
            <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-foreground/70 hover:text-orange-200 hover:bg-orange-500/10 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
