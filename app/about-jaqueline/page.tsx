import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { AboutGallery } from "../components/about-gallery"
import { AboutVideoSection } from "../components/about-video-section"

export const metadata: Metadata = {
  title: "About Jaqueline Lischka - Professional Female Cycling Coach Austria",
  description:
    "Erfahre mehr über Jaqueline Lischka, professionelle Radsport-Trainerin aus Wien. Spezialisiert auf Frauenradsport, zyklusgesteuertes Training und individuelle Coaching-Programme für alle Leistungsstufen.",
  keywords:
    "Jaqueline Lischka, Female Cycling Coach, Radsport Trainerin Wien, Frauenradsport, Cycling Coach Austria, Radsport Training, Triathlon Coach, Wettkampf Coaching",
  openGraph: {
    title: "About Jaqueline Lischka - Professional Female Cycling Coach",
    description:
      "Professionelle Radsport-Trainerin mit internationaler Wettkampferfahrung. Spezialisiert auf Frauenradsport und individuelles Coaching.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8265.JPG-SPMEGMZpKOwEI8NhNwLi320jrv17zN.jpeg",
        width: 800,
        height: 1200,
        alt: "Jaqueline Lischka - Professional Female Cycling Coach Austria",
      },
    ],
    type: "profile",
  },
  alternates: {
    canonical: "https://femalecycling.at/about-jaqueline",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jaqueline Lischka",
  jobTitle: "Professional Cycling Coach",
  description:
    "Professional female cycling coach specializing in women's cycling training and performance optimization",
  url: "https://femalecycling.at/about-jaqueline",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8265.JPG-SPMEGMZpKOwEI8NhNwLi320jrv17zN.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mühlgrundgasse 26",
    addressLocality: "Wien",
    postalCode: "1220",
    addressCountry: "AT",
  },
  email: "femalecyclingcoach@gmail.com",
  knowsAbout: [
    "Cycling Training",
    "Women's Sports Coaching",
    "Triathlon Training",
    "Sports Nutrition",
    "Mental Coaching",
    "Performance Optimization",
  ],
  hasCredential: ["Certified Cycling Coach", "Sports Nutrition Coach", "Mental Performance Coach"],
  award: [
    "Top-10 National Time Trial Championships",
    "Multiple Austrian Championships Medals in Triathlon",
    "Multiple Austrian Championships Medals in Duathlon",
  ],
}

const facts = [
  { value: "Top-10", label: "Nationale Zeitfahr-Meisterschaften" },
  { value: "2022", label: "Vollständiger Fokus auf Radsport" },
  { value: "ÖM", label: "Medaillen in Triathlon & Duathlon" },
  { value: "1:1", label: "Individuelles Female Coaching" },
]

const sections = [
  {
    title: "Deine Female Cycling Coach aus Wien",
    body: (
      <>
        Mein Name ist <strong>Jaqueline Lischka</strong> – professionelle Radsport-Trainerin, aktive Wettkampfathletin
        und deine Partnerin auf dem Weg zu deinen sportlichen Zielen. Mit nationaler und internationaler
        Wettkampferfahrung bringe ich als aktive Athletin eine einzigartige Perspektive ins{" "}
        <strong>Female Cycling Coaching</strong> ein, denn ich weiß genau, was es bedeutet, mit dem weiblichen Körper zu
        trainieren und zu performen.
      </>
    ),
  },
  {
    title: "Qualifikationen und Expertise im Radsport",
    body: (
      <>
        Meine Expertise als <strong>Cycling Coach</strong> basiert auf fundierten Ausbildungen in Radsport,
        Trainingssteuerung, Sporternährung und Mental Coaching. Ich betreue Athletinnen vom Anfänger- bis zum
        ambitionierten Leistungssport-Level und verstehe durch meine eigene Wettkampfpraxis die spezifischen
        Herausforderungen in Vorbereitung und Wettkampfphase.
      </>
    ),
  },
  {
    title: "Sportliche Erfolge und Wettkampferfahrung",
    body: (
      <>
        Meine sportliche Laufbahn begann erfolgreich im <strong>Laufsport</strong> mit zahlreichen nationalen Siegen,
        führte mich über den <strong>Triathlon</strong> zum Radsport, dem ich mich seit 2022 vollständig widme.
        Höhepunkte meiner Karriere sind eine{" "}
        <strong>Top-10 Platzierung bei den nationalen Zeitfahr-Meisterschaften</strong> sowie mehrere{" "}
        <strong>ÖM-Medaillen in Triathlon und Duathlon</strong>.
      </>
    ),
  },
  {
    title: "Zyklusgesteuertes Training für Frauen",
    body: (
      <>
        Als <strong>Radleiterin und Ernährungscoach</strong> biete ich ganzheitliche Betreuung, die modernste
        Trainingstechniken – insbesondere <strong>zyklusgesteuertes Training</strong> – mit individueller
        Athletenentwicklung verbindet. Diese Kombination aus praktischer Wettkampferfahrung und wissenschaftlich
        fundiertem Fachwissen ermöglicht mir, maßgeschneiderte <strong>Radsport Training Programme</strong> zu
        entwickeln.
      </>
    ),
  },
  {
    title: "Dein Weg zum Radsport-Erfolg",
    body: (
      <>
        Ob erste <strong>Langstreckenfahrt</strong>, <strong>Radmarathon</strong>, <strong>Ultra Bike Race</strong>{" "}
        oder Podiumsplatz – ich begleite dich als erfahrene <strong>Performance Coach</strong> professionell bei jedem
        Tritt in die Pedale und unterstütze dich dabei, deine Grenzen zu überwinden und deine Ziele zu erreichen.
      </>
    ),
  },
]

export default function AboutJaqueline() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* HERO – full-bleed */}
      <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#191340]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8265.JPG-SPMEGMZpKOwEI8NhNwLi320jrv17zN.jpeg"
          alt="Jaqueline Lischka in dynamischer Rennposition auf dem Rennrad"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191340] via-[#191340]/40 to-black/30" />
        <div className="relative z-10 flex min-h-[85vh] items-end">
          <div className="container mx-auto px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
              About · Female Cycling Coach
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-white text-balance sm:text-6xl lg:text-8xl">
              Jaqueline
              <br />
              Lischka
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Radsport-Trainerin aus Wien mit internationaler Wettkampferfahrung. Spezialisiert auf Frauenradsport,
              zyklusgesteuertes Training und individuelle Coaching-Programme.
            </p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="border-b border-[#191340]/10 bg-white">
        <div className="container mx-auto grid grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {facts.map((f) => (
            <div key={f.label} className="py-8 lg:py-12">
              <div className="text-3xl font-black uppercase tracking-tight text-[#FF5A1F] sm:text-4xl lg:text-5xl">
                {f.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-wide text-[#191340]/60 sm:text-sm">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY – editorial zweispaltig */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">Meine Story</span>
                <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#191340] text-balance sm:text-4xl lg:text-5xl">
                  Vom Laufsport aufs Rennrad
                </h2>
                <div className="relative mt-8 hidden aspect-[3/4] overflow-hidden rounded-2xl lg:block">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8271.JPG-BqvMIphgbjmD56tODPjQ7BZstYGIOe.jpeg"
                    alt="Jaqueline Lischka konzentriert in Renn-Position"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-10 sm:space-y-12">
                {sections.map((s) => (
                  <article key={s.title} className="border-b border-[#191340]/10 pb-10 last:border-0 sm:pb-12">
                    <h3 className="text-xl font-bold text-[#191340] sm:text-2xl">{s.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-[#191340]/70 sm:mt-4 sm:text-lg">{s.body}</p>
                  </article>
                ))}

                <div className="rounded-2xl bg-[#191340] p-6 text-white sm:p-8">
                  <p className="text-lg font-medium leading-relaxed sm:text-xl">
                    Gemeinsam entdecken wir dein volles Potenzial und inspirieren mehr Menschen, insbesondere Frauen, für
                    die Faszination des <strong className="text-[#FF5A1F]">Frauenradsports</strong>.
                  </p>
                  <Link
                    href="/kontakt"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#191340] transition-colors duration-200 hover:bg-[#FF5A1F] hover:text-white"
                  >
                    Jetzt Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO-SEKTION mit Hintergrundvideo */}
      <AboutVideoSection />

      {/* GALERIE mit Hover-Zoom */}
      <AboutGallery />

      {/* FAQ */}
      <section className="bg-white pb-16 sm:pb-24 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-[#191340] sm:mb-8 sm:text-3xl">
            Häufige Fragen
          </h2>
          <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
            <details className="rounded-xl border border-[#191340]/10 bg-white p-4 sm:p-6">
              <summary className="flex min-h-[44px] cursor-pointer items-center font-semibold text-[#191340]">
                Welche Qualifikationen hat Jaqueline als Cycling Coach?
              </summary>
              <p className="mt-3 leading-relaxed text-[#191340]/70">
                Jaqueline hat über 15 Jahre Wettkampferfahrung, Ausbildungen im Bereich Sporternährung und allgemeine
                Trainingslehre. Sie ist Mental Coach, hat langjährige Erfahrung als Beraterin in der Disziplin
                Sporternährung für Frauen und ist Rad Coach bei zahlreichen Rad Camps und Übungskursen.
              </p>
            </details>

            <details className="rounded-xl border border-[#191340]/10 bg-white p-4 sm:p-6">
              <summary className="flex min-h-[44px] cursor-pointer items-center font-semibold text-[#191340]">
                Was ist zyklusgesteuertes Training?
              </summary>
              <p className="mt-3 leading-relaxed text-[#191340]/70">
                Zyklusgesteuertes Training berücksichtigt den weiblichen Menstruationszyklus und passt die
                Trainingsintensität entsprechend den hormonellen Schwankungen an für optimale Leistungsentwicklung.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
