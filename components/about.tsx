export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-foreground/80 leading-relaxed">
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
            <div className="p-6 bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-foreground/70">Projects Completed</div>
            </div>
            <div className="p-6 bg-accent/10 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-foreground/70">Hackathons</div>
            </div>
            <div className="p-6 bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-foreground/70">Google Badges Collected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
