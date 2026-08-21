import { ArrowUpRight } from "lucide-react"

interface RotatingBadgeProps {
  text?: string
  className?: string
}

/**
 * Rundes, langsam rotierendes Sticker-Badge mit gebogenem Text (curved text)
 * entlang des Kreisrands. Der Pfeil in der Mitte deutet die Rotation an.
 */
export function RotatingBadge({
  text = "STRONGER RIDERS · BY PERSONAL COACHING · ",
  className = "",
}: RotatingBadgeProps) {
  return (
    <div
      className={`group relative flex items-center justify-center rounded-full bg-[#FF5A1F] text-[#191340] shadow-xl ${className}`}
      aria-hidden="true"
    >
      {/* Gebogener Text – dreht sich beim Hover */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[spin_10s_linear_infinite] [animation-play-state:paused] transition-transform duration-500 group-hover:scale-105 group-hover:[animation-play-state:running]"
      >
        <defs>
          <path id="badge-curve" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" fill="none" />
        </defs>
        <text className="fill-[#191340] text-[13px] font-bold uppercase tracking-[0.12em]">
          <textPath href="#badge-curve" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Zentrales Pfeil-Icon */}
      <ArrowUpRight className="relative h-7 w-7 sm:h-9 sm:w-9" strokeWidth={2.5} />
    </div>
  )
}
