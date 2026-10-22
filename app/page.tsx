"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Code2, Layers3, GraduationCap, Download, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const projects = [
  {
    number: "01",
    name: "AgriGuard",
    type: "AI · Agriculture",
    description: "An AI-assisted plant health companion that helps growers identify crop issues and explore practical, prevention-first care recommendations.",
    stack: ["React", "Gemini AI", "Computer Vision"],
    href: "https://agri-guard-tsou.vercel.app/",
    mark: "AG",
    tone: "agri",
  },
  {
    number: "02",
    name: "SANKALP",
    type: "Civic technology",
    description: "A civic-tech concept for organizing citizen requests and making local development needs easier to track and understand.",
    stack: ["FastAPI", "PostgreSQL", "Alembic"],
    href: "",
    mark: "SK",
    tone: "sankalp",
  },
  {
    number: "03",
    name: "MediPulse",
    type: "Health technology",
    description: "A healthcare discovery and queue-management concept connecting people with nearby clinics, pharmacies, and live doctor availability.",
    stack: ["Firebase", "React", "Node.js"],
    href: "https://github.com/Soumen-dev-ux/MediPulse",
    mark: "MP",
    tone: "medi",
  },
  {
    number: "04",
    name: "Fresh & Fast",
    type: "Full-stack web app",
    description: "A canteen ordering experience designed to make browsing a menu and placing an order straightforward.",
    stack: ["JavaScript", "CSS", "Firebase"],
    href: "https://fresh-and-fast.netlify.app/",
    mark: "F&F",
    tone: "fresh",
  },
  {
    number: "05",
    name: "DishCovery",
    type: "Food discovery",
    description: "A recipe discovery interface for exploring meal ideas and finding recipes from available ingredients.",
    stack: ["JavaScript", "Bootstrap", "TheMealDB"],
    href: "http://techie-sou.me/DishCovery/",
    mark: "DC",
    tone: "dish",
  },
]

const skills = ["Java", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Firebase", "Git & GitHub"]
const focusAreas = [
  { icon: Code2, title: "Full-stack development", body: "Building responsive interfaces and connecting them to reliable APIs and data." },
  { icon: Layers3, title: "AI-powered products", body: "Exploring practical ways to make AI features useful, understandable, and accessible." },
  { icon: GraduationCap, title: "Learning in public", body: "Improving through projects, hackathons, collaboration, and consistent practice." },
]

type PortfolioProject = (typeof projects)[number]
type ProjectRow = { id: string; title: string; slug: string; summary: string; category: string; year: string; stack: string[]; live_url: string; repo_url: string; featured: boolean; sort_order: number }

export default function Home() {
  const reduceMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectItems, setProjectItems] = useState<PortfolioProject[]>(projects)
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) return
    const endpoint = `${url.replace(/\/$/, "")}/rest/v1/projects?select=id,title,slug,summary,category,year,stack,live_url,repo_url,featured,sort_order&published=eq.true&order=featured.desc,sort_order.asc`
    fetch(endpoint, { headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: "no-store" })
      .then(response => { if (!response.ok) throw new Error("Project feed unavailable"); return response.json() as Promise<ProjectRow[]> })
      .then(rows => {
        if (!Array.isArray(rows)) return
        setProjectItems(rows.map((row, index) => {
          const known = projects.find(project => project.name.toLowerCase() === row.title.toLowerCase())
          const slug = (row.slug || row.title).toLowerCase()
          const tone = known?.tone ?? (slug.includes("medi") ? "medi" : slug.includes("fresh") ? "fresh" : slug.includes("dish") ? "dish" : "sankalp")
          return { number: String(index + 1).padStart(2, "0"), name: row.title, type: row.category || "Project", description: row.summary, stack: Array.isArray(row.stack) ? row.stack : [], href: row.live_url || row.repo_url || "", mark: known?.mark ?? row.title.split(/\s+/).map(word => word[0]).join("").slice(0, 3).toUpperCase(), tone }
        }))
      })
      .catch(() => undefined)
  }, [])
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.55, ease: "easeOut" as const } }

  const closeMenu = () => setMenuOpen(false)

  return (
    <main id="top" className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Soumen Pore, home"><span className="wordmark-dot" />soumen<span className="wordmark-muted">.dev</span></a>
        <button className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#education" onClick={closeMenu}>Education</a><a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-wrap">
        <motion.div className="hero-copy" {...reveal}>
          <div className="eyebrow"><span className="status-dot" /> STUDENT DEVELOPER · INDIA <span className="eyebrow-line" /></div>
          <h1>Building useful<br />things for the <span className="accent-text">real world.</span></h1>
          <p className="hero-description">Hey, I&apos;m <strong>Soumen Pore</strong> — a developer and engineering student interested in full-stack products, thoughtful interfaces, and applied AI.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="button button-quiet" href="/Soumen_Pore_Resume.pdf" target="_blank" rel="noreferrer"><Download size={16} /> View résumé</a></div>
          <div className="hero-socials"><a href="https://github.com/Soumen-dev-ux" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/soumen-pore/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a></div>
        </motion.div>
        <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="profile-frame"><Image src="/profile.webp" alt="Portrait of Soumen Pore" fill priority sizes="(max-width: 800px) 80vw, 400px" className="profile-image" /></div>
          <div className="floating-note note-top"><span className="note-icon"><Code2 size={16} /></span><span><strong>Curious by default</strong><small>Learning · Building · Iterating</small></span></div>
          <div className="floating-note note-bottom"><span className="availability-pulse" /><span><strong>Based in West Bengal, India</strong><small>Open to meaningful work</small></span></div>
          <div className="hero-index">PORTFOLIO / 2026</div>
        </motion.div>
        <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section id="work" className="section-wrap section-block">
        <motion.div className="section-heading" {...reveal}><div><p className="section-kicker">SELECTED WORK <span>01 — 05</span></p><h2>Ideas, turned into<br /><span className="muted-heading">working experiences.</span></h2></div><p className="section-aside">A few projects that reflect what I&apos;m learning, building, and curious about.</p></motion.div>
        <div className="project-grid">
          {projectItems.map((project, index) => <motion.article className={`project-card project-${project.tone}`} key={project.name} {...(reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.45, delay: index * 0.06 } })}>
            <div className="project-art"><span className="project-number">{project.number}</span><div className="project-monogram">{project.mark}</div><span className="project-art-label">{project.type}</span><div className="art-decoration" /></div>
            <div className="project-content"><div className="project-title-row"><h3>{project.name}</h3>{project.href ? <a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={18} /></a> : <span className="project-status">In progress</span>}</div><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </motion.article>)}
        </div>
      </section>

      <section id="about" className="section-wrap section-block about-section">
        <motion.div className="section-heading" {...reveal}><div><p className="section-kicker">A LITTLE ABOUT ME <span>01 / 03</span></p><h2>Engineer in training.<br /><span className="muted-heading">Builder by curiosity.</span></h2></div></motion.div>
        <div className="about-layout"><motion.div className="about-copy" {...reveal}><p>I&apos;m a third-year Electronics and Communication Engineering student at Gargi Memorial Institute of Technology, exploring the space where software engineering, product thinking, and AI meet.</p><p>I enjoy taking an idea from a rough sketch to something people can actually try — then learning from what works, what doesn&apos;t, and what needs to be better.</p><a className="text-link" href="/Soumen_Pore_Resume.pdf" target="_blank" rel="noreferrer">A little more on my résumé <ArrowUpRight size={16} /></a></motion.div><div className="focus-list">{focusAreas.map((item, index) => <motion.div className="focus-item" key={item.title} {...(reduceMotion ? {} : { initial: { opacity: 0, x: 12 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.45, delay: index * 0.08 } })}><span className="focus-icon"><item.icon size={19} /></span><div><h3>{item.title}</h3><p>{item.body}</p></div><ArrowUpRight size={16} className="focus-arrow" /></motion.div>)}</div></div>
      </section>

      <section id="skills" className="section-wrap section-block skills-section">
        <motion.div className="section-heading" {...reveal}><div><p className="section-kicker">TOOLS I WORK WITH <span>02 / 03</span></p><h2>Comfortable with the<br /><span className="muted-heading">building blocks.</span></h2></div><p className="section-aside">My toolkit keeps evolving. These are technologies I&apos;ve worked with or am actively developing.</p></motion.div>
        <motion.div className="skills-panel" {...reveal}><div className="skills-panel-label"><span className="skills-dot" /> CURRENT TOOLKIT</div><div className="skills-cloud">{skills.map((skill, index) => <span className={index < 4 ? "skill-chip skill-highlight" : "skill-chip"} key={skill}>{skill}</span>)}</div></motion.div>
      </section>

      <section id="education" className="section-wrap section-block education-section">
        <motion.div className="section-heading" {...reveal}><div><p className="section-kicker">EDUCATION <span>ACADEMIC FOUNDATION</span></p><h2>Learning the fundamentals.<br /><span className="muted-heading">Applying them through software.</span></h2></div></motion.div>
        <div className="education-grid"><motion.article className="education-card" {...reveal}><span className="education-icon"><GraduationCap size={20}/></span><div className="education-meta"><span>2024 — 2028</span><span>UNDERGRADUATE</span></div><h3>B.Tech — Electronics & Communication Engineering</h3><p>Gargi Memorial Institute of Technology</p><span className="education-note">Currently pursuing</span></motion.article><motion.article className="education-card" {...reveal}><span className="education-icon"><Layers3 size={20}/></span><div className="education-meta"><span>2022 — 2024</span><span>HIGHER SECONDARY</span></div><h3>Higher Secondary Education</h3><p>Anantapur Siddheswari High School</p><span className="education-note">West Bengal Council of Higher Secondary Education</span></motion.article></div>
      </section>

      <section id="journey" className="section-wrap section-block journey-section">
        <motion.div className="section-heading" {...reveal}><div><p className="section-kicker">THE JOURNEY SO FAR <span>03 / 03</span></p><h2>Learning by doing.<br /><span className="muted-heading">Growing with every build.</span></h2></div></motion.div>
        <div className="journey-list"><motion.article className="journey-row" {...reveal}><span className="journey-year">2026</span><span className="journey-marker" /><div><h3>Hackathons & applied AI</h3><p>Build with Gemini and SourceCode finalist experiences at IIT Kharagpur, alongside research presentation and team-building work.</p></div><span className="journey-type">BUILD</span></motion.article><motion.article className="journey-row" {...reveal}><span className="journey-year">2025</span><span className="journey-marker" /><div><h3>Community, collaboration & projects</h3><p>Contributing to campus tech activities and learning through project builds, competitions, and collaborative problem-solving.</p></div><span className="journey-type">GROW</span></motion.article><motion.article className="journey-row" {...reveal}><span className="journey-year">NOW</span><span className="journey-marker" /><div><h3>Deepening software fundamentals</h3><p>Focused on full-stack development, Java, problem-solving, and building a stronger foundation for industry work.</p></div><span className="journey-type">LEARN</span></motion.article></div>
      </section>

      <section id="contact" className="section-wrap contact-section"><motion.div className="contact-card" {...reveal}><div className="contact-glow" /><p className="section-kicker">HAVE A GOOD IDEA? <span>LET&apos;S CONNECT</span></p><h2>Let&apos;s build something<br /><span className="accent-text">that matters.</span></h2><p className="contact-description">Have a project, opportunity, or an interesting problem to solve? I&apos;d love to hear from you.</p><a className="button button-primary" href="mailto:soumenpore0109@gmail.com">Start a conversation <Mail size={16} /></a><div className="contact-links"><a href="https://github.com/Soumen-dev-ux" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/soumen-pore/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div></motion.div></section>

      <footer className="site-footer"><a className="wordmark" href="#top"><span className="wordmark-dot" />soumen<span className="wordmark-muted">.dev</span></a><span>Designed with intention. Built with curiosity.</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  )
}
