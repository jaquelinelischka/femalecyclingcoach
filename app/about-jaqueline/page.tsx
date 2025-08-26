import Image from "next/image"
import type { Metadata } from "next"
import { ScrollRevealVideo } from "../components/ScrollRevealVideo"

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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frauen%20Coach%20Jaqueline%20Lischka.jpg-unfZ4ZPN46IZIoQNXhCCzsRahJrPHD.jpeg",
        width: 800,
        height: 800,
        alt: "Jaqueline Lischka - Professional Female Cycling Coach Austria",
      },
    ],
    type: "profile",
  },
  alternates: {
    canonical: "https://femalecycling.at/about-jaqueline",
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jaqueline Lischka",
  jobTitle: "Professional Cycling Coach",
  description:
    "Professional female cycling coach specializing in women's cycling training and performance optimization",
  url: "https://femalecycling.at/about-jaqueline",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frauen%20Coach%20Jaqueline%20Lischka.jpg-unfZ4ZPN46IZIoQNXhCCzsRahJrPHD.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mühlgrundgasse 26",
    addressLocality: "Wien",
    postalCode: "1220",
    addressCountry: "AT",
  },
  email: "info@femalecycling.at",
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

export default function AboutJaqueline() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen py-8 sm:py-12 lg:py-16 xl:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-[#191340] leading-tight px-2">
              About Jaqueline Lischka - Professional Female Cycling Coach
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Erfahrene Radsport-Trainerin aus Wien mit internationaler Wettkampferfahrung. Spezialisiert auf
              Frauenradsport, zyklusgesteuertes Training und individuelle Coaching-Programme.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:max-w-none">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frauen%20Coach%20Jaqueline%20Lischka.jpg-unfZ4ZPN46IZIoQNXhCCzsRahJrPHD.jpeg"
                  alt="Jaqueline Lischka - Professional Female Cycling Coach Austria training in Mallorca"
                  width={800}
                  height={800}
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                  style={{
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>

              {/* Video Section mit 300px Breite und optimiertem Abstand */}
              <ScrollRevealVideo>
                <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 pt-6 sm:pt-8 lg:pt-12 flex justify-center">
                  <div className="relative w-[280px] sm:w-[300px] video-container">
                    <div className="relative overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-[#191340] to-[#4a6d58] p-1">
                      <div className="relative overflow-hidden rounded-lg">
                        <video
                          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frauen%20Coach%20Jaqueline%20Lischka.jpg-unfZ4ZPN46IZIoQNXhCCzsRahJrPHD.jpeg"
                          style={{
                            transform: "translateZ(0)",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20250620_152554243.TS-5CqPjKwdY2DYj5lfWjgNLRxyEReZub.mp4" type="video/mp4" />
                          Ihr Browser unterstützt das Video-Element nicht.
                        </video>

                        {/* Overlay-Effekt */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#191340]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Video-Beschriftung */}
                        <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 hover:opacity-100 transition-opacity duration-500">
                          <p className="text-xs font-medium drop-shadow-lg">Jaqueline in Aktion</p>
                        </div>
                      </div>
                    </div>

                    {/* Dekorative Elemente */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#4a6d58] rounded-full opacity-60 animate-pulse" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#191340] rounded-full opacity-40 animate-pulse delay-1000" />
                  </div>
                </div>
              </ScrollRevealVideo>
            </div>

            <div className="order-1 lg:order-2 bg-white/90 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md flex flex-col">
              <article className="space-y-4 sm:space-y-6 lg:space-y-8 flex-grow">
                <section>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-[#191340]">
                    Deine Female Cycling Coach aus Wien
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Mein Name ist <strong>Jaqueline Lischka</strong> – professionelle Radsport-Trainerin, aktive
                    Wettkampfathletin und deine Partnerin auf dem Weg zu deinen sportlichen Zielen. Mit nationaler und
                    internationaler Wettkampferfahrung bringe ich als aktive Athletin eine einzigartige Perspektive ins{" "}
                    <strong>Female Cycling Coaching</strong> ein, denn ich weiß genau, was es bedeutet, mit dem
                    weiblichen Körper zu trainieren und zu performen.
                  </p>
                </section>

                <section>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-[#191340]">
                    Qualifikationen und Expertise im Radsport
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Meine Expertise als <strong>Cycling Coach</strong> basiert auf fundierten Ausbildungen in Radsport,
                    Trainingssteuerung, Sporternährung und Mental Coaching. Ich betreue Athletinnen vom Anfänger- bis
                    zum ambitionierten Leistungssport-Level und verstehe durch meine eigene Wettkampfpraxis die
                    spezifischen Herausforderungen in Vorbereitung und Wettkampfphase.
                  </p>
                </section>

                <section>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-[#191340]">
                    Sportliche Erfolge und Wettkampferfahrung
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Meine sportliche Laufbahn begann erfolgreich im <strong>Laufsport</strong> mit zahlreichen
                    nationalen Siegen, führte mich über den <strong>Triathlon</strong> zum Radsport, dem ich mich seit
                    2022 vollständig widme. Höhepunkte meiner Karriere sind eine{" "}
                    <strong>Top-10 Platzierung bei den nationalen Zeitfahr-Meisterschaften</strong>
                    sowie mehrere <strong>ÖM-Medaillen in Triathlon und Duathlon</strong>.
                  </p>
                </section>

                <section>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-[#191340]">
                    Spezialisierung: Zyklusgesteuertes Training für Frauen
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Als <strong>Radleiterin und Ernährungscoach</strong> biete ich ganzheitliche Betreuung, die
                    modernste Trainingstechniken – insbesondere <strong>zyklusgesteuertes Training</strong> – mit
                    individueller Athletenentwicklung verbindet. Diese Kombination aus praktischer Wettkampferfahrung
                    und wissenschaftlich fundiertem Fachwissen ermöglicht mir, maßgeschneiderte{" "}
                    <strong>Radsport Training Programme</strong> zu entwickeln.
                  </p>
                </section>

                <section>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-[#191340]">
                    Dein Weg zum Radsport-Erfolg
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Ob erste <strong>Langstreckenfahrt</strong>, <strong>Radmarathon</strong>,{" "}
                    <strong>Ultra Bike Race</strong> oder Podiumsplatz – ich begleite dich als erfahrene{" "}
                    <strong>Performance Coach</strong> professionell bei jedem Tritt in die Pedale und unterstütze dich
                    dabei, deine Grenzen zu überwinden und deine Ziele zu erreichen.
                  </p>
                </section>
              </article>

              <footer className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                  Gemeinsam entdecken wir dein volles Potenzial und inspirieren mehr Menschen, insbesondere Frauen, für
                  die Faszination des <strong>Frauenradsports</strong>!
                </p>
              </footer>
            </div>
          </div>

          {/* FAQ Schema for SEO */}
          <section className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 text-[#191340]">
              Häufige Fragen zu Jaqueline Lischka
            </h2>
            <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
              <details className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-[#191340] cursor-pointer text-sm sm:text-base min-h-[44px] flex items-center touch-manipulation">
                  Welche Qualifikationen hat Jaqueline als Cycling Coach?
                </summary>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  Jaqueline hat über 15 Jahre Wettkampferfahrung, Ausbildungen im Bereich Sporternährung und allgemeine
                  Trainingslehre. Sie ist mental Coach, hat langjährige Erfahrung als Beraterin in der Disziplin
                  Sporternährung für Frauen und ist Rad Coach bei zahlreichen Rad Camps und Übungskursen.
                </p>
              </details>

              <details className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-[#191340] cursor-pointer text-sm sm:text-base min-h-[44px] flex items-center touch-manipulation">
                  Was ist zyklusgesteuertes Training?
                </summary>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  Zyklusgesteuertes Training berücksichtigt den weiblichen Menstruationszyklus und passt die
                  Trainingsintensität entsprechend den hormonellen Schwankungen an für optimale Leistungsentwicklung.
                </p>
              </details>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
