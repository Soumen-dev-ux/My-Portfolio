"use client"

import { motion } from "framer-motion"
import Tilt from "@/components/tilt"

const achievements = [
  {
    title: "Freshers Talent",
    issuer: "ByteStorm",
    year: "2025",
    icon: "🏆",
    description: "Recognized as Best in Freshers during ByteStorm Hackathon and led team to win Freshers Talent",
  },
  {
    title: "Participant at Hackazards",
    issuer: "NameSpace Community",
    year: "2025",
    icon: "⭐",
    description: "Led a 4 member team in online National Hackathon",
  },
  {
    title: "Winner at CodeSpark",
    issuer: "Government Engineering College, Siwan",
    year: "2025",
    icon: "🏆",
    description: "Won a Haackathon as Solo Team",
  },
  {
    title: "Organizer, Mentor & Host",
    issuer: "Gargi Memorial Institute of Tecnology",
    year: "2025",
    icon: "🎤",
    description: "Organized and mentored a two days hackathon and also hosted in final round.",
  },
  {
    title: "Intern at EngineNow",
    issuer: "EngineNow",
    year: "2026",
    icon: "🚀",
    description: "Successfully completed 1 month Full Stack Development Program and InternShip",
  },
  {
    title: "Finalist at Build with Gemini",
    issuer: "IIT Kharagpur",
    year: "2026",
    icon: "🏆",
    description: "Successfully cracked the problem of Round 1 and selcted and solved problem of Final Round for occasion of Asia's biggest Techno-management fest at IIT KGP.",
  },
  {
    title: "Finalist at Source Code",
    issuer: "IIT Kharagpur",
    year: "2026",
    icon: "🧑🏻‍💻",
    description: "Cracked the midnight competitive coding competition and selected for Final Round for occasion of Asia's biggest Techno-management fest at IIT KGP.",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements & Awards
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Tilt className="group w-full h-full">
                <div className="p-8 h-full border-l-4 border-primary neumorphic rounded-2xl pointer-events-auto hover-glow transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform neumorphic-inset p-4 rounded-xl">
                      {achievement.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-2">{achievement.description}</p>
                      <div className="flex flex-wrap gap-3 text-foreground/60 text-xs">
                        <span className="font-medium">{achievement.issuer}</span>
                        <span>•</span>
                        <span>{achievement.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
