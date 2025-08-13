import Image from "next/image"
import Link from "next/link"
import { BikeIcon, User, Calendar, Mail, Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jaqueline%20Lischka-9rlHu1DLMZAZDpRcpNqAdOfO7tsZkC.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#191340]/30" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg leading-tight">
              Steigere deine Radsportleistung
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white drop-shadow-lg max-w-4xl mx-auto leading-relaxed px-4">
              Professionelles Coaching und maßgeschneiderte Trainingspläne für Radfahrer aller Niveaus, mit besonderer
              Expertise im Frauenradsport.
            </p>
            <Link
              href="/preise"
              className="bg-white text-[#191340] py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg text-base sm:text-lg min-h-[44px] inline-flex items-center justify-center"
            >
              Jetzt starten
            </Link>
          </div>
        </section>

        {/* Leistungen Section */}
        <section id="leistungen" className="py-12 sm:py-16 lg:py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#191340]">
              Meine Leistungen
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-white/90 p-6 sm:p-8 rounded-lg shadow-md">
                <BikeIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#4a6d58] mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#191340]">Individueller Trainingsplan</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Maßgeschneiderte Programme, die auf deine Ziele, dein Fitnessniveau und deinen Zeitplan abgestimmt
                  sind.
                </p>
              </div>
              <div className="bg-white/90 p-6 sm:p-8 rounded-lg shadow-md">
                <User className="w-10 h-10 sm:w-12 sm:h-12 text-[#4a6d58] mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#191340]">Persönliches Coaching</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Individuelle Betreuung, Technik-Training und kontinuierliche Unterstützung, um deine Radsportziele zu
                  erreichen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Über Mich Section */}
        <section id="ueber-mich" className="py-12 sm:py-16 lg:py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#191340]">
              About Jaqueline
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frauen%20Coach%20Jaqueline%20Lischka.jpg-unfZ4ZPN46IZIoQNXhCCzsRahJrPHD.jpeg"
                    alt="Jaqueline Lischka - Professionelle Radsporttrainerin beim Training in Mallorca"
                    width={800}
                    height={800}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-white/90 p-6 sm:p-8 rounded-lg shadow-md flex flex-col">
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
                    className="text-[#191340] font-medium hover:text-[#4a6d58] transition-colors text-sm sm:text-base whitespace-nowrap"
                  >
                    Mehr über mich →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" className="py-12 sm:py-16 lg:py-20 bg-[#191340]/80 backdrop-blur-sm text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
              Bereit, dein Radsport-Potenzial zu entfalten?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-2xl mx-auto">
              <Link
                href="mailto:coach@femalecycling.at"
                className="flex items-center bg-white text-[#191340] py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300 min-h-[44px] w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">E-Mail senden</span>
              </Link>
              <Link
                href="https://calendly.com/femalecyclingcoach/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white text-[#191340] py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300 min-h-[44px] w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">Termin buchen</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer für die Home-Seite */}
        <section className="py-4 sm:py-6 bg-gray-100 text-gray-700 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-2 sm:mb-3">
              <a
                href="https://www.instagram.com/ridewithjacky?igsh=MXJuZWg2MWRjc3NuMw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#191340] transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Folge mir auf Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Female Cycling Coach. Alle Rechte vorbehalten.
            </p>
            <div className="mt-2 sm:mt-3 text-xs text-gray-500">
              <p className="break-words">Jaqueline Lischka | Mühlgrundgasse 26, 1220 Wien | info@femalecycling.at</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
