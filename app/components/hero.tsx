import Link from "next/link"
import { RotatingBadge } from "./rotating-badge"

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#191340]">
      {/* Full-bleed Hintergrund: Video-Platzhalter.
          Sobald du ein Video hast, ersetze <img> durch:
          <video autoPlay muted loop playsInline poster="/hero-poster.jpg" className="...">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
      */}
      <div className="absolute inset-0 z-0">
        {/* PLATZHALTER — hier kommt später dein Hintergrund-Video / -Bild rein */}
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#191340] via-[#241a5c] to-[#0f0b26]">
          <div className="flex flex-col items-center gap-3 text-white/40">
            <svg className="h-14 w-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.2em]">Video / Bild Platzhalter</span>
          </div>
        </div>
        {/* Abdunklung für Lesbarkeit der Headline */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/30" />
      </div>

      {/* Rotierendes Sticker-Badge, ragt leicht über den oberen rechten Bildrand hinaus */}
      <div className="pointer-events-none absolute right-4 top-4 z-20 sm:right-10 sm:top-8 lg:right-16">
        <RotatingBadge className="h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40" />
      </div>

      {/* Content — linksbündig */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] items-end">
        <div className="container mx-auto px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-left text-[1.75rem] font-black uppercase leading-[0.95] tracking-tight text-white xs:text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-balance">
              Steigere deine Radsportleistung
            </h1>
            <p className="mt-6 max-w-xl text-left text-sm leading-relaxed text-white/80 sm:mt-8 sm:text-base lg:text-lg">
              Professionelles Coaching und maßgeschneiderte Trainingspläne für Radfahrer aller Niveaus, mit besonderer
              Expertise im Frauenradsport.
            </p>
            <Link
              href="/preise"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#191340] transition-colors duration-300 hover:bg-[#FF5A1F] hover:text-white sm:mt-10 sm:text-base"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
