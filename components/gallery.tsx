"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"
import AnimatedText from "@/components/animated-text"

const galleryItems = [
  {
    id: 1,
    title: "Holographic Code Visualizer",
    category: "Spell Workspace",
    src: "/gallery_holographic_code.png",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 2,
    title: "Dimensional Spell Runes",
    category: "Rune Computation",
    src: "/gallery_mystic_runes.png",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    title: "Cyberpunk Sorcerer Setup",
    category: "Workspace Layout",
    src: "/gallery_cyberpunk_workspace.png",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Galaxy Charting Dashboard",
    category: "Dimensional Navigation",
    src: "/gallery_galaxy_dashboard.png",
    gridClass: "md:col-span-1 md:row-span-1",
  },
]

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<typeof galleryItems[0] | null>(null)

  return (
    <section id="gallery" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center relative z-10">
        <AnimatedText text="My Space & Artifacts" className="text-4xl md:text-5xl font-bold mb-4 justify-center" />
        <p className="text-foreground/60 text-center max-w-md mb-12">
          A visual archive of high-dimensional development workspaces, holographic interfaces, and runic computations.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] w-full mt-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group cursor-pointer mystic-panel rounded-[2rem] overflow-hidden relative flex flex-col justify-end transition-all duration-300 hover:border-primary/50 ${item.gridClass}`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
              </div>

              {/* Card Details */}
              <div className="relative z-10 p-6 flex items-center justify-between w-full">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary drop-shadow-[0_0_8px_#38BDF8] mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveItem(null)}
        >
          <button
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-[110]"
            onClick={() => setActiveItem(null)}
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-[90vw] aspect-video md:aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeItem.src}
              alt={activeItem.title}
              fill
              className="object-cover"
              sizes="90vw"
              priority
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {activeItem.category}
              </span>
              <h4 className="text-xl font-bold text-white mt-1">{activeItem.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
