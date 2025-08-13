"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollRevealVideoProps {
  children: React.ReactNode
}

export function ScrollRevealVideo({ children }: ScrollRevealVideoProps) {
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8")
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={videoRef} className="opacity-0 translate-y-8 transition-all duration-800 ease-out">
      {children}
    </div>
  )
}
