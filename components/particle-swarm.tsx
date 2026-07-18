"use client"

import dynamic from "next/dynamic"

// Dynamically import the ParticleSwarm canvas with ssr disabled
const ParticleSwarmBackgroundCanvas = dynamic(
  () => import("./particle-swarm-canvas"),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-[#000] -z-20" />
  }
)

export default function ParticleSwarmBackground() {
  return <ParticleSwarmBackgroundCanvas />
}
