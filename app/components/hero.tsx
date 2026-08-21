import Link from "next/link"
import Image from "next/image"
import { RotatingBadge } from "./rotating-badge"

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#191340]">
      {/* Full-bleed Hintergrund.
          Sobald du ein Video hast, ersetze das <Image> durch:
          <video autoPlay muted loop playsInline poster="/hero-poster.jpg" className="h-full w-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-8BSLkbcYlJ8jZPJP8lC1j5KLvMbIEa.jpeg"
          alt="Radrennfahrerinnen im Peloton während eines Straßenrennens"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        {/* Abdunklung für Lesbarkeit der Headline */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
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
