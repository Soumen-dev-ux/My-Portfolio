"use client"

import { useState, useEffect } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/css3.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vuedotjs.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mongodb.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/firebase.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" },
      { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
      { name: "Google Antigravity", logo: "https://brandlogos.net/wp-content/uploads/2025/12/google_antigravity-logo_brandlogos.net_qu4jc-768x708.png"}
    ],
  },
]

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skillCategories.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="relative overflow-hidden">
          <div className="transition-all duration-700 ease-out">
            <div className="p-8 rounded-2xl border border-border/30 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {skillCategories[currentIndex].title}
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6">
                {skillCategories[currentIndex].skills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-3 animate-scaleIn"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center hover:scale-125 transition-all duration-300 cursor-pointer hover:shadow-lg hover:from-primary/40 hover:to-accent/40 dark:invert-0 invert p-3">
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-primary to-accent"
                    : "w-2 bg-border hover:bg-border/70"
                }`}
                aria-label={`Go to skill category ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
