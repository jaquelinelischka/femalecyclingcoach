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
  return (
    <div
      className={`group relative flex items-center justify-center rounded-full bg-[#FF5A1F] text-[#191340] shadow-xl ${className}`}
      aria-label="Developed & engineered for strong women by Female Cycling Coach"
    >
      {/* Gebogener Text – dreht sich beim Hover */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite] [animation-play-state:paused] transition-transform duration-500 group-hover:scale-105 group-hover:[animation-play-state:running]"
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
        className="h-8 w-8 transition-transform duration-500 group-hover:rotate-45"
        aria-hidden="true"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </div>
  )
}
