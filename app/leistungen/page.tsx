import { BikeIcon as Bicycle, User, Target, HeartPulse } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Bicycle,
    title: "Individueller Trainingsplan",
    body: "Maßgeschneiderte Programme, die auf deine Ziele, dein Fitnessniveau und deinen Zeitplan abgestimmt sind, mit Erkenntnissen aus langjähriger Erfahrung im Coaching von Radsportlerinnen und Triathletinnen.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8270.JPG-6ZdFjpvW8F7qciTLsrT1s3afLFCRSP.jpeg",
    alt: "Zwei Rennfahrerinnen Seite an Seite auf einer Landstraße",
  },
  {
    icon: User,
    title: "Persönliches Coaching",
    body: "Individuelle Betreuung, Technik-Training und kontinuierliche Unterstützung, um deine Radsportziele zu erreichen, unabhängig von deinem Ausgangspunkt. Profitiere von meiner Erfahrung als aktive Radsportlerin und Trainerin.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8274.JPG-djFMNGUmxyZ8ceDmrxfZ5VlvM2r81Z.jpeg",
    alt: "Rennfahrerinnen stoßen fröhlich nach dem Rennen an",
  },
]

const highlights = [
  {
    icon: Target,
    title: "Zielgerichtet",
    body: "Von der ersten Langstreckenfahrt bis zum Podiumsplatz – jeder Plan ist auf dein konkretes Ziel ausgerichtet.",
  },
  {
    icon: HeartPulse,
    title: "Zyklusgesteuert",
    body: "Training, das den weiblichen Körper versteht und die Intensität an deine hormonellen Phasen anpasst.",
  },
  {
    icon: User,
    title: "1:1 Betreuung",
    body: "Persönliches Coaching mit regelmäßigem Feedback, Technik-Training und kontinuierlicher Anpassung.",
  },
]

export default function Leistungen() {
  return (
    <>
      {/* HERO – full-bleed */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#191340]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8260%202.JPG-w8ysDY9HjdSoh5QfACgC4yNWLiKojZ.jpeg"
          alt="Rennfahrerin auf einer Bergstraße vor Alpenpanorama"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191340] via-[#191340]/40 to-black/30" />
        <div className="relative z-10 flex min-h-[80vh] items-end">
          <div className="container mx-auto px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
              Coaching · Female Cycling
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-white text-balance sm:text-6xl lg:text-8xl">
              Meine
              <br />
              Leistungen
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Maßgeschneidertes Radsport-Coaching für Frauen – von individuellen Trainingsplänen bis zur persönlichen
              1:1 Betreuung auf dem Weg zu deinen Zielen.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-[#191340]/10 bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-16">
          {highlights.map((h) => (
            <div key={h.title}>
              <h.icon className="h-8 w-8 text-[#FF5A1F]" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-bold uppercase tracking-tight text-[#191340]">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#191340]/70">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES – editorial abwechselnd */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto space-y-20 px-4 sm:px-6 lg:space-y-32 lg:px-8">
          {services.map((s, i) => (
            <div key={s.title} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={`group relative aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={s.image || "/placeholder.svg"}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                  {`0${i + 1}`}
                </span>
                <s.icon className="mt-4 h-10 w-10 text-[#191340]" strokeWidth={1.75} />
                <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#191340] text-balance sm:text-4xl lg:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#191340]/70 sm:text-lg">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#191340] py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Bereit, stärker zu werden?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Vereinbare ein unverbindliches Erstgespräch und lass uns gemeinsam deinen Weg planen.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#191340] transition-colors duration-200 hover:bg-[#FF5A1F] hover:text-white"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
