"use client"

import { Trophy, Star, Award, Mic, Rocket, Code2, Sparkles } from "lucide-react"
import AnimatedText from "@/components/animated-text"

const achievements = [
  {
    title: "Freshers Talent Winner",
    issuer: "ByteStorm",
    year: "2025",
    icon: Trophy,
    description: "Recognized as Best in Freshers during ByteStorm Hackathon and led team to win Freshers Talent",
  },
  {
    title: "Hackazards Leader",
    issuer: "NameSpace Community",
    year: "2025",
    icon: Star,
    description: "Led a 4 member team in online National Hackathon",
  },
  {
    title: "Winner at CodeSpark",
    issuer: "GEC, Siwan",
    year: "2025",
    icon: Award,
    description: "Won a Hackathon as Solo Team",
  },
  {
    title: "Organizer, Mentor & Host",
    issuer: "Gargi Memorial Inst. of Tech",
    year: "2025",
    icon: Mic,
    description: "Organized and mentored a two days hackathon and also hosted in final round.",
  },
  {
    title: "Intern at EngineNow",
    issuer: "EngineNow",
    year: "2026",
    icon: Rocket,
    description: "Successfully completed 1 month Full Stack Development Program and Internship",
  },
  {
    title: "Finalist at Build with Gemini",
    issuer: "IIT Kharagpur",
    year: "2026",
    icon: Trophy,
    description: "Cracked the problem of Round 1 and solved the Final Round for Asia's biggest Techno-management fest.",
  },
  {
    title: "Finalist at Source Code",
    issuer: "IIT Kharagpur",
    year: "2026",
    icon: Code2,
    description: "Cracked the midnight competitive coding competition and selected for Final Round at IIT KGP.",
  },
  {
    title: "Research Presenter at ATMAN AI",
    issuer: "GMIT",
    year: "2026",
    icon: Mic,
    description: "Presented first research paper in a National conference on AI.",
  },
  {
    title: "Research Presenter at FOSET",
    issuer: "FOSET",
    year: "2026",
    icon: Award,
    description: "Presented research paper as delegate at GKCEM for 16th academic meet of FOSET.",
  },
]

export default function Achievements() {
  // Balance items to 6 per row to ensure sufficient width on large/4K viewports
  const row1Cards = [
    achievements[0],
    achievements[1],
    achievements[2],
    achievements[3],
    achievements[4],
    achievements[5],
  ]
  const row2Cards = [
    achievements[6],
    achievements[7],
    achievements[8],
    achievements[0],
    achievements[1],
    achievements[2],
  ]

  const AchievementCard = ({ achievement }: { achievement: typeof achievements[0] }) => {
    const IconComponent = achievement.icon
    return (
      <div className="w-[320px] md:w-[380px] flex-shrink-0 p-6 border-l-4 border-primary mystic-panel rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
        <div className="flex items-start gap-4">
          <div className="text-primary flex-shrink-0 bg-primary/15 p-3 rounded-xl border border-primary/25">
            <IconComponent className="w-5 h-5" />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-base font-bold text-white mb-1 truncate">
              {achievement.title}
            </h3>
            <p className="text-xs text-foreground/75 mb-2 line-clamp-2 leading-relaxed">
              {achievement.description}
            </p>
            <div className="flex items-center gap-2 text-foreground/50 text-[10px]">
              <span className="font-semibold truncate max-w-[150px]">{achievement.issuer}</span>
              <span>•</span>
              <span>{achievement.year}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="achievements" className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.02),transparent_60%)] pointer-events-none" />
      
      <div className="w-full flex flex-col items-center justify-center relative z-10">
        <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          Honors & Recognition
        </div>
        <AnimatedText text="Achievements & Awards" className="text-4xl md:text-5xl font-bold mb-12 text-center text-white" />

        <div className="w-full flex flex-col gap-6 overflow-hidden py-4">
          {/* Row 1 (Left to Right / Sliding Right) */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-ltr flex w-max select-none">
              {/* Copy 1 */}
              <div className="flex gap-6 pr-6 flex-shrink-0">
                {row1Cards.map((achievement, index) => (
                  <AchievementCard key={`row1-c1-${index}`} achievement={achievement} />
                ))}
              </div>
              {/* Copy 2 */}
              <div className="flex gap-6 pr-6 flex-shrink-0">
                {row1Cards.map((achievement, index) => (
                  <AchievementCard key={`row1-c2-${index}`} achievement={achievement} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 (Right to Left / Sliding Left) */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-rtl flex w-max select-none">
              {/* Copy 1 */}
              <div className="flex gap-6 pr-6 flex-shrink-0">
                {row2Cards.map((achievement, index) => (
                  <AchievementCard key={`row2-c1-${index}`} achievement={achievement} />
                ))}
              </div>
              {/* Copy 2 */}
              <div className="flex gap-6 pr-6 flex-shrink-0">
                {row2Cards.map((achievement, index) => (
                  <AchievementCard key={`row2-c2-${index}`} achievement={achievement} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
