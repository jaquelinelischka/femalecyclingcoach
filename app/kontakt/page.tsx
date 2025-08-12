import { Mail, Calendar, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Kontakt() {
  return (
    <div className="min-h-screen flex flex-col safari-flex-fix">
      {/* Hero Section mit Bild */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sport%20Coach%20Ziel.jpg-dOvd30h7UlMQ8ROGNVBLJOs4Bqgyyl.jpeg"
            alt="Malerische Straße in Mallorca - Der Weg zum Erfolg"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{
              objectPosition: "center center",
              transform: "translateZ(0)" /* Safari-Optimierung für Bildrendering */,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[#191340]/50" />
        <div className="absolute inset-0 flex items-center justify-center safari-flex-fix px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Lass uns gemeinsam durchstarten
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg leading-relaxed">
              Der erste Schritt zu deinem Erfolg im Radsport beginnt mit einem Gespräch
            </p>
          </div>
        </div>
      </div>

      {/* Kontakt Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Kontaktoptionen */}
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#191340] mb-4 sm:mb-6">Kontaktiere mich</h2>
                <div className="space-y-4 sm:space-y-6">
                  <a
                    href="mailto:femalecyclingcoach@gmail.com"
                    className="flex items-center space-x-3 sm:space-x-4 text-gray-700 hover:text-[#191340] transition-colors p-2 -m-2 rounded-lg min-h-[44px]"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">femalecyclingcoach@gmail.com</span>
                  </a>
                  <a
                    href="tel:+436507782832"
                    className="flex items-center space-x-3 sm:space-x-4 text-gray-700 hover:text-[#191340] transition-colors p-2 -m-2 rounded-lg min-h-[44px]"
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">+43 650 77 82 83 2</span>
                  </a>
                  <div className="flex items-center space-x-3 sm:space-x-4 text-gray-700 p-2 -m-2 min-h-[44px]">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Mühlgrundgasse 26, 1220 Wien</span>
                  </div>
                </div>

                <div className="pt-6 sm:pt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#191340] mb-4 sm:mb-6">
                    Kostenlose Erstberatung
                  </h3>
                  <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                    Vereinbare ein unverbindliches Gespräch, in dem wir deine Ziele und Möglichkeiten besprechen können.
                  </p>
                  <a
                    href="https://calendly.com/femalecyclingcoach/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#191340] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-[#191340]/90 transition-colors min-h-[44px] text-sm sm:text-base"
                  >
                    <Calendar className="w-5 h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    Termin buchen
                  </a>
                </div>
              </div>

              {/* Informationen */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-[#191340] mb-4 sm:mb-6">Dein Weg zum Erfolg</h3>
                <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base">
                  <p className="leading-relaxed">
                    Als deine Radsport-Trainerin begleite ich dich auf deinem individuellen Weg zu deinen sportlichen
                    Zielen. Egal ob du:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 ml-4 leading-relaxed">
                    <li>Deine erste Langstreckenfahrt planst</li>
                    <li>Dich auf einen Radmarathon vorbereitest</li>
                    <li>Deine Leistung im Wettkampf verbessern möchtest</li>
                    <li>Technisch sicherer werden willst</li>
                  </ul>
                  <p className="leading-relaxed">
                    Gemeinsam entwickeln wir einen maßgeschneiderten Trainingsplan, der zu deinem Lifestyle und deinen
                    Ambitionen passt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
