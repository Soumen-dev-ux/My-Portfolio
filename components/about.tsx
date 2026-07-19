import { motion } from "framer-motion"
import Spotlight from "@/components/spotlight"
import AnimatedText from "@/components/animated-text"
import VaporizeTextCycle from "@/components/text-vaporize"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedText text="About Me" className="text-4xl font-bold mb-8 justify-center" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-foreground/80 leading-relaxed space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <VaporizeTextCycle
                texts={[
                  "I am an aspiring full-stack developer with a strong interest in building modern, responsive, and user-focused web applications. I enjoy transforming ideas into functional digital solutions using clean and efficient code."
                ]}
                font={{
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.6,
                  textAlign: "left"
                }}
                color="rgba(250, 250, 250, 0.85)"
                alignment="left"
                spread={3}
                density={6}
                appear={{
                  mode: "particle",
                  order: "left-to-right",
                  transition: { type: "tween", duration: 1.0, ease: "easeOut", delay: 0 }
                }}
                tag="p"
              />
            </div>

            <div>
              <VaporizeTextCycle
                texts={[
                  "My technical expertise includes HTML, CSS, JavaScript, and the MERN stack, along with experience in UI/UX design, animations, and client-side state management. I focus on performance, scalability, and accessibility while following modern development best practices."
                ]}
                font={{
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.6,
                  textAlign: "left"
                }}
                color="rgba(250, 250, 250, 0.85)"
                alignment="left"
                spread={3}
                density={6}
                appear={{
                  mode: "particle",
                  order: "left-to-right",
                  transition: { type: "tween", duration: 1.0, ease: "easeOut", delay: 0.3 }
                }}
                tag="p"
              />
            </div>

            <div>
              <VaporizeTextCycle
                texts={[
                  "In addition to development, I bring a creative mindset and leadership skills that help me collaborate effectively and deliver impactful digital experiences. I am continuously learning and evolving to stay aligned with emerging technologies."
                ]}
                font={{
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.6,
                  textAlign: "left"
                }}
                color="rgba(250, 250, 250, 0.85)"
                alignment="left"
                spread={3}
                density={6}
                appear={{
                  mode: "particle",
                  order: "left-to-right",
                  transition: { type: "tween", duration: 1.0, ease: "easeOut", delay: 0.6 }
                }}
                tag="p"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Spotlight className="neumorphic rounded-2xl hover-glow group transition-all duration-300 overflow-hidden">
              <div className="relative z-20 p-8">
                <div className="text-4xl font-bold text-gradient-animated inline-block mb-2">25+</div>
                <div className="text-foreground/70 font-medium">Projects Completed</div>
              </div>
            </Spotlight>
            <Spotlight className="neumorphic rounded-2xl hover-glow group transition-all duration-300 overflow-hidden">
              <div className="relative z-20 p-8">
                <div className="text-4xl font-bold text-gradient-animated inline-block mb-2">10+</div>
                <div className="text-foreground/70 font-medium">Hackathons</div>
              </div>
            </Spotlight>
            <Spotlight className="neumorphic rounded-2xl hover-glow group transition-all duration-300 overflow-hidden">
              <div className="relative z-20 p-8">
                <div className="text-4xl font-bold text-gradient-animated inline-block mb-2">20+</div>
                <div className="text-foreground/70 font-medium">Google Badges Collected</div>
              </div>
            </Spotlight>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
