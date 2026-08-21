import Image from "next/image"
import Link from "next/link"
import { BikeIcon, User, Calendar, Mail } from "lucide-react"
import { Hero } from "./components/hero"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-white">
      {/* Main Content */}
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Leistungen Section */}
        <section id="leistungen" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#191340]">
              Meine Leistungen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-white/90 p-6 sm:p-8 rounded-lg shadow-md">
                <BikeIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FF5A1F] mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 text-[#191340]">
                  Individueller Trainingsplan
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Maßgeschneiderte Programme, die auf deine Ziele, dein Fitnessniveau und deinen Zeitplan abgestimmt
                  sind.
                </p>
              </div>
              <div className="bg-white/90 p-6 sm:p-8 rounded-lg shadow-md">
                <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FF5A1F] mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 text-[#191340]">
                  Persönliches Coaching
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Individuelle Betreuung, Technik-Training und kontinuierliche Unterstützung, um deine Radsportziele zu
                  erreichen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Über Mich Section */}
        <section id="ueber-mich" className="py-12 sm:py-16 lg:py-20 bg-[#f5f5f3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#191340]">
              About Jaqueline
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8271.JPG-BqvMIphgbjmD56tODPjQ7BZstYGIOe.jpeg"
                    alt="Jaqueline Lischka - Radrennfahrerin in Renn-Position auf dem Rennrad"
                    width={800}
                    height={1067}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                    style={{
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                  {/* Brand-Logo, leicht über den unteren Bildrand ragend */}
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bildschirmfoto%202026-08-20%20um%2020.26.16-aN5TUYiccYUI5yKWWvSygryCcqEFhO.png"
                    alt="Female Cycling Coach — developed by Jaqueline Lischka"
                    width={320}
                    height={320}
                    className="absolute -bottom-6 -right-4 w-28 sm:w-36 lg:w-44 h-auto rounded-xl shadow-2xl ring-4 ring-white rotate-3"
                    sizes="(max-width: 640px) 30vw, 176px"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-white/90 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md flex flex-col">
                <div className="flex-grow space-y-4 sm:space-y-6">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Als erfahrene Radsporttrainerin mit Wettkampferfahrung auf nationalem und internationalem Niveau
                    biete ich professionelles Coaching für Radfahrerinnen und Radfahrer aller Leistungsstufen. Meine
                    Expertise im Frauenradsport und zyklusgesteuertem Training macht mein Angebot besonders wertvoll für
                    Athletinnen.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Mit Erfolgen im Radsport, Triathlon und Laufen bringe ich ein umfassendes Verständnis für die
                    Anforderungen verschiedener Ausdauersportarten mit. Als zertifizierte Radleiterin und
                    Ernährungscoach betreue ich meine Athletinnen und Athleten ganzheitlich und entwickle individuell
                    zugeschnittene Trainingsprogramme.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Meine Coaching-Philosophie verbindet wissenschaftlich fundierte Trainingsmethoden mit praktischer
                    Erfahrung. Ob du deine erste Langstreckenfahrt planst, an einem Radmarathon teilnehmen möchtest oder
                    Wettkampfambitionen hast – ich unterstütze dich dabei, dein volles Potenzial zu entfalten.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center border-t border-gray-200 pt-4 sm:pt-6 space-y-4 sm:space-y-0">
                  <p className="text-gray-700 text-sm sm:text-base">
                    Bereit, deine Radsportleistung auf das nächste Level zu bringen?
                  </p>
                  <Link
                    href="/about-jaqueline"
                    className="text-[#191340] font-medium hover:text-[#FF5A1F] transition-colors text-sm sm:text-base whitespace-nowrap min-h-[44px] flex items-center touch-manipulation"
                  >
                    Mehr über mich →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" className="py-12 sm:py-16 lg:py-20 bg-[#191340] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
              Bereit, dein Radsport-Potenzial zu entfalten?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-2xl mx-auto">
              <Link
                href="mailto:coach@femalecycling.at"
                className="flex items-center bg-white text-[#191340] py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300 min-h-[44px] w-full sm:w-auto justify-center touch-manipulation"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">E-Mail senden</span>
              </Link>
              <Link
                href="https://calendly.com/femalecyclingcoach/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white text-[#191340] py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300 min-h-[44px] w-full sm:w-auto justify-center touch-manipulation"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Termin buchen</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
