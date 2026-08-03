export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Portfolio</h3>
            <p className="text-foreground/70 text-sm">
              A full-stack developer passionate about building modern web applications and solving complex problems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>Email: soumenpore7777@gmail.com</p>
              <p>Phone: +91 7432840665</p>
              <p>Location: Kolkata, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
            <p>Designed & Built by Me with React & Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
