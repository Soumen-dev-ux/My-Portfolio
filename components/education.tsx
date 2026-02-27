"use client"

import { motion } from "framer-motion"
import Spotlight from "@/components/spotlight"

const education = [
  {
    degree: "Higher Secondary",
    institution: "Anantapur Siddheswari High School",
    year: "2022-2024",
    description: "Passed Higher Secondary boards under WBCHSE with 66%",
    icon: "🎓",
  },
  {
    degree: "Bachelor in Technology",
    institution: "Gargi Memorial institute of Technology",
    year: "2024-2028",
    description: "Enrolled in B. Tech in Electronics and Communication Engineering under MAKAUT University",
    icon: "💻",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className={`md:flex gap-8 w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="md:w-1/2">
                  <Spotlight className="h-full">
                    <div className="relative z-20 p-6 bg-card rounded-lg">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                      <div className="text-primary font-semibold mb-2">{item.institution}</div>
                      <div className="text-foreground/60 text-sm mb-3">{item.year}</div>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </Spotlight>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
