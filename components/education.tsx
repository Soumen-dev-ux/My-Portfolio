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
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className={`md:flex gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2">
                  <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                    <div className="text-primary font-semibold mb-2">{item.institution}</div>
                    <div className="text-foreground/60 text-sm mb-3">{item.year}</div>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
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
