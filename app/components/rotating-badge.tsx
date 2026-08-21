"use client"

import { useState } from "react"

interface RotatingBadgeProps {
  text?: string
  className?: string
}

/**
 * Flaches, rundes Sticker-Badge in Orange mit gebogenem Text entlang des
 * Kreisrands und einem kleinen Pfeil-Icon in der Mitte. Der Text steht still
 * und beginnt zu rotieren, sobald man über das Badge hovert.
 */
export function RotatingBadge({
  text = "DEVELOPED & ENGINEERED FOR STRONG WOMEN · BY FEMALE CYCLING COACH · ",
  className = "",
}: RotatingBadgeProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`pointer-events-auto relative flex items-center justify-center rounded-full bg-[#FF5A1F] text-[#191340] shadow-xl transition-transform duration-500 ${
        hovered ? "scale-105" : ""
      } ${className}`}
      aria-label="Developed & engineered for strong women by Female Cycling Coach"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gebogener Text – dreht sich beim Hover */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]"
        style={{ animationPlayState: hovered ? "running" : "paused" }}
        aria-hidden="true"
      >
        <defs>
          <path id="badge-curve" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" fill="none" />
        </defs>
        <text className="fill-[#191340] text-[10px] font-bold uppercase tracking-[0.06em]">
          <textPath href="#badge-curve" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Pfeil-Icon in der Mitte, deutet die Rotation an */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-8 w-8 transition-transform duration-500 ${hovered ? "rotate-45" : ""}`}
        aria-hidden="true"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </div>
  )
}
