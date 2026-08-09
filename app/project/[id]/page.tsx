"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { projects } from "@/components/projects"

export default function ProjectPage() {
  const params = useParams()
  const id = Number(params.id)
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="max-w-md rounded-3xl border border-white/10 bg-card p-8 text-center">
          <h1 className="mb-3 text-3xl font-bold">Project not found</h1>
          <p className="mb-7 text-foreground/65">This project does not exist in the portfolio.</p>
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/#projects" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-card/60 shadow-2xl shadow-primary/5 backdrop-blur">
          <div className="relative aspect-[16/7] min-h-64">
            <Image src={project.imageSrc} alt={`${project.title} preview`} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="relative -mt-24 px-6 pb-10 md:-mt-32 md:px-12 md:pb-14">
            <span className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-sm font-medium text-primary">
              {project.category} · {project.year}
            </span>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-6xl">{project.title}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/75 md:text-xl">{project.description}</p>

            <div className="my-9 flex flex-wrap gap-2">
              {project.tech.map((tech) => <span key={tech} className="rounded-full bg-white/8 px-3 py-1.5 text-sm text-foreground/80">{tech}</span>)}
            </div>

            <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
              <div>
                <h2 className="mb-3 text-xl font-semibold text-white">Overview</h2>
                <p className="leading-relaxed text-foreground/65">This sample case study demonstrates a user-first product experience with a clear visual system, responsive layouts, and room for future feature growth.</p>
              </div>
              <div>
                <h2 className="mb-3 text-xl font-semibold text-white">What&apos;s next</h2>
                <p className="leading-relaxed text-foreground/65">A production version could add real data integrations, authenticated workflows, and measurement to continuously improve the experience.</p>
              </div>
            </div>

            <Link href="/#contact" className="mt-10 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-accent">
              Discuss a similar project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
