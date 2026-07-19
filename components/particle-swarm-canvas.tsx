"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import { OrbitControls, Effects } from "@react-three/drei"
import { UnrealBloomPass } from "three-stdlib"
import * as THREE from "three"

extend({ UnrealBloomPass })

// Declare local JSX elements for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: any
    }
  }
}

const ParticleSwarmComponent = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 20000
  const speedMult = 1
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const target = useMemo(() => new THREE.Vector3(), [])
  const pColor = useMemo(() => new THREE.Color(), [])
  const color = pColor // Alias for user code compatibility

  const positions = useMemo(() => {
    const pos = []
    for (let i = 0; i < count; i++) {
      pos.push(new THREE.Vector3((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100))
    }
    return pos
  }, [count])

  // Material & Geometry
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), [])
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), [])

  const PARAMS = useMemo(() => ({ scale: 115, growth: 1.388, life: 2.12, fruit: 2.608 }), [])
  
  const addControl = (id: string, l: string, min: number, max: number, val: number) => {
    // @ts-ignore
    return PARAMS[id] !== undefined ? PARAMS[id] : val
  }
  
  const setInfo = (title: string, desc: string) => {}
  const annotate = (id: string, pos: THREE.Vector3, label: string) => {}

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime() * speedMult

    const mat = material as any
    if (mat.uniforms && mat.uniforms.uTime) {
      mat.uniforms.uTime.value = time
    }

    for (let i = 0; i < count; i++) {
      // USER CODE START
      const scale = addControl("scale", "Scale", 50, 300, 180)
      const growth = addControl("growth", "Growth", 0.2, 2.0, 1.0)
      const life = addControl("life", "Life Flow", 0.0, 4.0, 1.2)
      const fruitSize = addControl("fruit", "Fruit Size", 0.2, 3.0, 1.0)

      const p = i / Math.max(count, 1)
      const t = time * life

      let x = 0
      let y = 0
      let z = 0

      if (p < 0.55) {
        const q = p / 0.55
        const spiral = q * 40.0 + t * 0.3
        const radius = (6 + q * 18) * (1 + 0.15 * Math.sin(q * 30 + t))

        x = Math.cos(spiral) * radius
        z = Math.sin(spiral) * radius
        y = q * scale - scale * 0.5

        x += Math.sin(y * 0.05 + t) * 10
        z += Math.cos(y * 0.04 - t) * 10

        color.setHSL(0.28, 0.9, 0.45)
      } else if (p < 0.8) {
        const q = (p - 0.55) / 0.25
        const branch = Math.floor(q * 12.0)
        const local = q * 12.0 - branch
        const dir = branch * 0.52
        const len = local * scale * 0.6

        x = Math.cos(dir) * len + Math.sin(local * 10 + t) * 6
        z = Math.sin(dir) * len + Math.cos(local * 10 - t) * 6
        y = scale * 0.1 + branch * 4 + Math.sin(local * 6 + t) * 8

        color.setHSL(0.33, 0.85, 0.5)
      } else if (p < 0.92) {
        const q = (p - 0.8) / 0.12
        const cluster = Math.floor(q * 8.0)
        const local = q * 8.0 - cluster
        const ang = cluster * 0.78
        const r = fruitSize * 12 * (0.5 + 0.5 * Math.sin(local * 6.283))

        x = Math.cos(ang) * (scale * 0.35) + Math.cos(local * 30) * r
        z = Math.sin(ang) * (scale * 0.35) + Math.sin(local * 30) * r
        y = scale * 0.15 + cluster * 6 + Math.cos(local * 20) * r

        color.setHSL(0.82 + 0.05 * Math.sin(t), 0.95, 0.55 + 0.2 * Math.sin(local * 20 + t))
      } else {
        const q = (p - 0.92) / 0.08
        const palm = Math.min(q * 6.0, 1.0)
        const finger = Math.floor(q * 5.0)
        const local = q * 5.0 - finger

        x = scale * 0.45 + palm * 35 + local * 18
        y = 10 + finger * 8 + Math.sin(local * 3.1415) * 6
        z = Math.cos(local * 6.283) * 4

        color.setHSL(0.09, 0.35, 0.65 + 0.1 * Math.sin(t))
      }

      target.set(x, y, z)

      if (i === 0) {
        setInfo("The True Vine", "A luminous vine bearing fruit while the Gardener's hand gently tends every branch.")
        annotate("vine", new THREE.Vector3(0, scale * 0.2, 0), "True Vine")
        annotate("fruit", new THREE.Vector3(scale * 0.3, scale * 0.2, 0), "Fruit")
        annotate("hand", new THREE.Vector3(scale * 0.5, 20, 0), "Gardener")
      }
      // USER CODE END

      positions[i].lerp(target, 0.1)
      dummy.position.copy(positions[i])
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
      meshRef.current.setColorAt(i, pColor)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true
  })

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />
}

export default function ParticleSwarmBackgroundCanvas() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#000] -z-20 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
        <fog attach="fog" args={["#000000", 0.01]} />
        <ParticleSwarmComponent />
        <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} enablePan={false} enableRotate={false} />
        <Effects disableGamma>
          {/* @ts-ignore */}
          <unrealBloomPass threshold={0} strength={1.8} radius={0.4} />
        </Effects>
      </Canvas>
    </div>
  )
}
