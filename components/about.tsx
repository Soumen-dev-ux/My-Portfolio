import Spotlight from "@/components/spotlight"
import AnimatedText from "@/components/animated-text"
import BorderGlow from "@/components/BorderGlow"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedText text="About Me" className="text-4xl font-bold mb-8 justify-center" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-foreground/80 leading-relaxed space-y-6">
            <p>
              I am an aspiring full-stack developer with a strong interest in building modern, responsive, and user-focused web applications. I enjoy transforming ideas into functional digital solutions using clean and efficient code.
            </p>
            <p>
              My technical expertise includes HTML, CSS, JavaScript, and the MERN stack, along with experience in UI/UX design, animations, and client-side state management. I focus on performance, scalability, and accessibility while following modern development best practices.
            </p>
            <p>
              In addition to development, I bring a creative mindset and leadership skills that help me collaborate effectively and deliver impactful digital experiences. I am continuously learning and evolving to stay aligned with emerging technologies.
            </p>
          </div>

          <div className="space-y-4">
            <BorderGlow
              glowColor="198 93 60"
              colors={['#38bdf8', '#22d3ee', '#0284c7']}
              borderRadius={16}
              backgroundColor="#120F17"
              className="rounded-2xl"
            >
              <Spotlight className="neumorphic box-glow rounded-2xl hover-glow group transition-all duration-300 overflow-hidden p-8">
                <div className="relative z-20">
                  <div className="text-4xl font-bold text-gradient-animated inline-block mb-2">20+</div>
                  <div className="text-foreground/70 font-medium">Projects Completed</div>
                </div>
              </Spotlight>
            </BorderGlow>
            <BorderGlow
              glowColor="198 93 60"
              colors={['#38bdf8', '#22d3ee', '#0284c7']}
              borderRadius={16}
              backgroundColor="#120F17"
              className="rounded-2xl"
            >
              <Spotlight className="neumorphic box-glow rounded-2xl hover-glow group transition-all duration-300 overflow-hidden p-8">
                <div className="relative z-20">
                  <div className="text-4xl font-bold text-gradient-animated inline-block mb-2">10+</div>
                  <div className="text-foreground/70 font-medium">Hackathons</div>
                </div>
              </Spotlight>
            </BorderGlow>
            <BorderGlow
              glowColor="198 93 60"
              colors={['#38bdf8', '#22d3ee', '#0284c7']}
              borderRadius={16}
              backgroundColor="#120F17"
              className="rounded-2xl"
            >
              <Spotlight className="neumorphic box-glow rounded-2xl hover-glow group transition-all duration-300 overflow-hidden p-8">
                <div className="relative z-20">
                  <div className="text-4xl font-bold text-gradient-animated inline-block mb-2">25+</div>
                  <div className="text-foreground/70 font-medium">Google Badges Collected</div>
                </div>
              </Spotlight>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  )
}
