"use client"

import { projects } from "@/components/projects"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/components/page-transition"
import { useParams } from "next/navigation"


export default function ProjectPage() {
  const params = useParams()
  const idStr = params.id as string
  const project = projects.find((p) => p.id === parseInt(idStr))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center neumorphic p-8 rounded-2xl max-w-md w-full">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-foreground/70 mb-8">The project you are looking for doesn't exist or has been removed.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors w-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 neumorphic rounded-full text-primary font-semibold hover:shadow-inner transition-all duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="neumorphic rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="w-full md:w-1/3 aspect-square neumorphic-inset rounded-2xl flex items-center justify-center text-8xl shrink-0 group-hover:scale-[1.02] transition-transform duration-500">
                {project.image}
              </div>

              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="prose dark:prose-invert max-w-none text-foreground/70 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Overview</h3>
                    <p className="leading-relaxed">
                      This project was built to address specific needs in the market, providing a seamless
                      and intuitive user experience. Leveraging modern technologies like {project.tech.join(", ")},
                      we ensured high performance, reliability, and scalability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Future Scope</h3>
                    <p className="leading-relaxed">
                      Future iterations will focus on expanding feature sets and integrating more advanced
                      capabilities based on real-time user feedback and analytics. The architecture has been
                      designed from the ground up to accommodate these future enhancements easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
