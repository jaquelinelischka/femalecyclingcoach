import Image from "next/image"

interface RotatingBadgeProps {
  text?: string
  className?: string
}

/**
 * 3D-anmutendes Sticker-Badge in Helm-Optik:
 * ein gewölbter oranger Kreis mit einem gerenderten Rennradhelm samt schwarzer
 * Brille in der Mitte, umrahmt von gebogenem Text, der beim Hover rotiert.
 */
export function RotatingBadge({
  text = "DEVELOPED & ENGINEERED FOR STRONG WOMEN · BY FEMALE CYCLING COACH · ",
  className = "",
}: RotatingBadgeProps) {
  return (
    <div
      className={`group relative [perspective:700px] ${className}`}
      aria-label="Developed & engineered for strong women by Female Cycling Coach"
    >
      {/* Gewölbte 3D-Scheibe */}
      <div
        className="absolute inset-0 rounded-full transition-transform duration-500 ease-out [transform:rotateX(12deg)] group-hover:[transform:rotateX(0deg)]"
        style={{
          background: "radial-gradient(circle at 35% 28%, #FF8A4C 0%, #FF5A1F 45%, #D6410F 100%)",
          boxShadow:
            "0 22px 40px -12px rgba(10,8,30,0.55), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -10px 22px rgba(120,30,0,0.55)",
        }}
      >
        {/* dezenter Glanz-Ring innen */}
        <div className="absolute inset-[7%] rounded-full ring-1 ring-white/20" />
      </div>

      {/* Gebogener Text – dreht sich beim Hover */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite] [animation-play-state:paused] transition-transform duration-500 group-hover:[animation-play-state:running]"
      >
        <defs>
          <path id="badge-curve" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
        </defs>
        <text className="fill-[#191340] text-[9.5px] font-black uppercase tracking-[0.02em]">
          <textPath href="#badge-curve" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>

      {/* 3D-Helm mit schwarzer Brille in der Mitte */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-105">
        <Image
          src="/helmet-3d.png"
          alt=""
          width={220}
          height={220}
          className="h-[62%] w-[62%] object-contain drop-shadow-[0_8px_10px_rgba(10,8,30,0.45)]"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
