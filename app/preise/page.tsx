import { Check } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Einsteiger-Paket",
    price: "149",
    features: ["Monatlicher Trainingsplan", "Monatliches Check-in", "WhatsApp-Support"],
    featured: false,
  },
  {
    name: "Fortgeschrittenen-Paket",
    price: "199",
    features: [
      "Individueller Trainingsplan",
      "Zweiwöchentliche Video-Calls",
      "Leistungsanalyse",
      "Prioritäts-Support",
    ],
    featured: true,
  },
  {
    name: "Profi-Paket",
    price: "249",
    features: [
      "Maßgeschneiderter Trainingsplan",
      "Wöchentliche Video-Calls",
      "Praxisnahe Ernährungstipps",
      "24/7 Support",
    ],
    featured: false,
  },
]

export default function Preise() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="border-b border-[#191340]/10 bg-white">
        <div className="container mx-auto px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-40">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
            Coaching-Pakete
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-[#191340] text-balance sm:text-6xl lg:text-7xl">
            Preise &amp; Pakete
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#191340]/70 sm:text-lg">
            Transparente Pakete für jedes Level. Finde das passende Coaching und starte deinen Weg zu mehr Leistung
            auf dem Rad.
          </p>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl p-8 ${
                pkg.featured
                  ? "bg-[#191340] text-white ring-2 ring-[#FF5A1F]"
                  : "bg-white text-[#191340] ring-1 ring-[#191340]/10"
              }`}
            >
              {pkg.featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-[#FF5A1F] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Beliebteste Wahl
                </span>
              )}
              <h2 className="text-lg font-bold uppercase tracking-tight">{pkg.name}</h2>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tight">€{pkg.price}</span>
                <span className={pkg.featured ? "text-white/60" : "text-[#191340]/50"}>/ Monat</span>
              </div>
              <ul className="mt-8 flex-grow space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF5A1F]" strokeWidth={2.5} />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/femalecyclingcoach/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${
                  pkg.featured
                    ? "bg-white text-[#191340] hover:bg-[#FF5A1F] hover:text-white"
                    : "bg-[#191340] text-white hover:bg-[#FF5A1F]"
                }`}
              >
                Kontaktiere mich
              </a>
            </div>
          ))}
        </div>

        <div className="container mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#191340]/60">
            Du bist dir nicht sicher, welches Paket passt?{" "}
            <Link href="/kontakt" className="font-semibold text-[#191340] underline decoration-[#FF5A1F] underline-offset-4 hover:text-[#FF5A1F]">
              Lass uns in einem kostenlosen Erstgespräch klären.
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
