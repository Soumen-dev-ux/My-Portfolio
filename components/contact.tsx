"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Using Formspree for form submission
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-center text-foreground/70 mb-12">
          Have a project in mind? Let's work together to create something amazing.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700 dark:text-green-400 animate-in slide-in-from-top-2">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Enter Your email address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          {[
            { label: "GitHub", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg", link: "https://github.com/Soumen-dev-ux/" },
            { label: "LinkedIn", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg", link: "https://www.linkedin.com/in/soumen-pore/" },
            { label: "Twitter", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/x.svg", link: "https://x.com/SoumenPore62983" },
            { label: "Instagram", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg", link: "https://www.instagram.com/techie.sou_19/" }
          ].map((social) => (
            <a
              key={social.label}
              href={social.link}
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-110"
            >
              <img src={social.logo || "/placeholder.svg"} alt={social.label} className="w-6 h-6 dark:invert" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
