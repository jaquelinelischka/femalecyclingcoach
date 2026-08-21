import { Mail, Calendar, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Kontakt() {
  return (
    <>
      {/* HERO – full-bleed */}
      <section className="relative min-h-[65vh] w-full overflow-hidden bg-[#191340]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8270.JPG-6ZdFjpvW8F7qciTLsrT1s3afLFCRSP.jpeg"
          alt="Zwei Rennfahrerinnen auf einer Landstraße"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191340] via-[#191340]/50 to-black/30" />
        <div className="relative z-10 flex min-h-[65vh] items-end">
          <div className="container mx-auto px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">Kontakt</span>
            <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              Lass uns
              <br />
              durchstarten
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Der erste Schritt zu deinem Erfolg im Radsport beginnt mit einem Gespräch.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Kontaktoptionen */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                Kontaktiere mich
              </span>
              <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#191340] sm:text-4xl">
                Direkt erreichbar
              </h2>

              <div className="mt-8 space-y-2">
                <a
                  href="mailto:femalecyclingcoach@gmail.com"
                  className="flex min-h-[44px] items-center gap-4 rounded-xl p-3 text-[#191340]/80 transition-colors hover:bg-[#f5f5f3] hover:text-[#191340]"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-[#FF5A1F]" />
                  <span className="break-all text-sm sm:text-base">femalecyclingcoach@gmail.com</span>
                </a>
                <a
                  href="tel:+436507782832"
                  className="flex min-h-[44px] items-center gap-4 rounded-xl p-3 text-[#191340]/80 transition-colors hover:bg-[#f5f5f3] hover:text-[#191340]"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-[#FF5A1F]" />
                  <span className="text-sm sm:text-base">+43 650 77 82 83 2</span>
                </a>
                <div className="flex min-h-[44px] items-center gap-4 p-3 text-[#191340]/80">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-[#FF5A1F]" />
                  <span className="text-sm sm:text-base">Mühlgrundgasse 26, 1220 Wien</span>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-[#191340] p-6 text-white sm:p-8">
                <h3 className="text-xl font-bold">Kostenlose Erstberatung</h3>
                <p className="mt-3 leading-relaxed text-white/70">
                  Vereinbare ein unverbindliches Gespräch, in dem wir deine Ziele und Möglichkeiten besprechen können.
                </p>
                <a
                  href="https://calendly.com/femalecyclingcoach/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#191340] transition-colors duration-200 hover:bg-[#FF5A1F] hover:text-white"
                >
                  <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
                  Termin buchen
                </a>
              </div>
            </div>

            {/* Informationen */}
            <div className="rounded-2xl bg-[#f5f5f3] p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl font-bold text-[#191340]">Dein Weg zum Erfolg</h3>
              <div className="mt-6 space-y-6 text-[#191340]/70">
                <p className="leading-relaxed">
                  Als deine Radsport-Trainerin begleite ich dich auf deinem individuellen Weg zu deinen sportlichen
                  Zielen. Egal ob du:
                </p>
                <ul className="space-y-3">
                  {[
                    "Deine erste Langstreckenfahrt planst",
                    "Dich auf einen Radmarathon vorbereitest",
                    "Deine Leistung im Wettkampf verbessern möchtest",
                    "Technisch sicherer werden willst",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF5A1F]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="leading-relaxed">
                  Gemeinsam entwickeln wir einen maßgeschneiderten Trainingsplan, der zu deinem Lifestyle und deinen
                  Ambitionen passt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
