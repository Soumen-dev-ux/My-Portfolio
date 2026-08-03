"use client"

import AnimatedText from "@/components/animated-text"

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
        <AnimatedText text="Education & Internship" className="text-4xl font-bold mb-12 text-center text-white" />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_9px_#38BDF8]" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className={`md:flex gap-8 w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2">
                  <div className="h-full mystic-panel rounded-[2rem] overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_28px_rgba(56,189,248,0.2)]">
                    <div className="relative z-20 p-8">
                      <div className="text-4xl mb-6 inline-block p-4 rounded-full border border-primary/35 bg-primary/10">{item.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                      <div className="text-gradient-animated inline-block font-bold mb-3">{item.institution}</div>
                      <div className="text-foreground/60 text-sm mb-4 font-medium">{item.year}</div>
                      <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center relative z-10 w-8">
                  <div className="relative h-6 w-6 rounded-full border border-primary/50 bg-accent shadow-[0_0_10px_#38BDF8]" />
                </div>

                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
