"use client"

import AnimatedText from "@/components/animated-text"
import BorderGlow from "@/components/BorderGlow"

export default function Contact() {
  const platforms = [
    {
      label: "Gmail",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg",
      link: "mailto:soumenpore0109@gmail.com",
      color: "hover:border-red-500/50 hover:bg-red-500/5"
    },
    {
      label: "GitHub",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",
      link: "https://github.com/Soumen-dev-ux/",
      color: "hover:border-neutral-400/50 hover:bg-neutral-400/5"
    },
    {
      label: "LinkedIn",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg",
      link: "https://www.linkedin.com/in/soumen-pore/",
      color: "hover:border-sky-500/50 hover:bg-sky-500/5"
    },
    {
      label: "LeetCode",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg",
      link: "https://leetcode.com/u/sou-dev/",
      color: "hover:border-amber-500/50 hover:bg-amber-500/5"
    },
    {
      label: "Codeforces",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeforces.svg",
      link: "https://codeforces.com/profile/techie-sou",
      color: "hover:border-blue-400/50 hover:bg-blue-400/5"
    },
    {
      label: "X",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/x.svg",
      link: "https://x.com/SoumenPore62983",
      color: "hover:border-neutral-200/50 hover:bg-neutral-200/5"
    },
    {
      label: "Instagram",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg",
      link: "https://www.instagram.com/techie.sou_19/",
      color: "hover:border-pink-500/50 hover:bg-pink-500/5"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <BorderGlow
          glowColor="198 93 60"
          colors={['#38bdf8', '#22d3ee', '#0284c7']}
          borderRadius={32}
          backgroundColor="#120F17"
          className="relative mystic-panel box-glow p-8 md:p-12 rounded-[2rem] overflow-hidden flex flex-col items-center"
        >
          <AnimatedText text="Platforms I'm in" className="text-4xl font-bold mb-4 text-center text-white w-full" />
          <p className="text-center text-foreground/70 mb-8 max-w-md">
            Find me on these coding platforms, developer networks, and social channels.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            {platforms.map((platform) => (
              <a
                key={platform.label}
                href={platform.link}
                target={platform.link.startsWith("mailto:") ? undefined : "_blank"}
                rel={platform.link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className={`w-14 h-14 rounded-full flex items-center justify-center border border-primary/30 bg-primary/10 hover:border-accent hover:shadow-[0_0_18px_rgba(56,189,248,0.4)] group transition-all duration-300 ${platform.color}`}
                aria-label={platform.label}
              >
                <img
                  src={platform.logo}
                  alt={platform.label}
                  className="w-6 h-6 dark:invert group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </BorderGlow>
      </div>
    </section>
  )
}
