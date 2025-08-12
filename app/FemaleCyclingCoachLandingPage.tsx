"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { BikeIcon as Bicycle, Calendar, User, Mail, CheckCircle, Instagram } from "lucide-react"

export default function FemaleCyclingCoachLandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jaqueline%20Lischka-3IbnxNMrINi0NGKAE1KmBmrFxloi4S.png')`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          height: "120%",
          top: "-10%",
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-10" />

      <header className="bg-[#4a6d84]/90 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Female Cycling Coach</h1>
        </div>
      </header>
      <nav className="bg-[#5a7d94]/90 text-white sticky top-[60px] z-40 shadow-md">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#leistungen" className="hover:underline">
                Leistungen
              </a>
            </li>
            <li>
              <a href="#ueber-mich" className="hover:underline">
                About Jaqueline
              </a>
            </li>
            <li>
              <a href="#preise" className="hover:underline">
                Preise
              </a>
            </li>
            <li>
              <a href="#kontakt" className="hover:underline">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow relative z-20">
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Steigere deine Radsportleistung</h2>
              <p className="text-xl mb-6 text-white drop-shadow-lg">
                Professionelles Coaching und maßgeschneiderte Trainingspläne für Radfahrer aller Niveaus, mit besonderer
                Expertise im Frauenradsport.
              </p>
              <a
                href="#kontakt"
                className="bg-white text-[#1a4b84] py-1 px-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-block shadow-lg text-lg"
              >
                Jetzt starten
              </a>
            </div>
          </div>
        </section>

        <section id="leistungen" className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1a4b84]">Meine Leistungen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 p-6 rounded-lg shadow-md">
                <Bicycle className="w-12 h-12 text-[#4a6d58] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1a4b84]">Individuelle Trainingspläne</h3>
                <p className="text-gray-700">
                  Maßgeschneiderte Programme, die auf deine Ziele, dein Fitnessniveau und deinen Zeitplan abgestimmt
                  sind, mit Erkenntnissen aus langjähriger Erfahrung im Coaching von Radsportlerinnen und
                  Triathletinnen.
                </p>
              </div>
              <div className="bg-white/90 p-6 rounded-lg shadow-md">
                <User className="w-12 h-12 text-[#4a6d58] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1a4b84]">Persönliches Coaching</h3>
                <p className="text-gray-700">
                  Individuelle Betreuung, Technik Training und kontinuierliche Unterstützung, um deine Radsportziele zu
                  erreichen, unabhängig von deinem Ausgangspunkt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ueber-mich" className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1a4b84]">About Jaqueline</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/5 mb-8 md:mb-0">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF1925.jpg-IFfS5ki80tJlf2bPif1JZojM84iHhZ.jpeg"
                    alt="Jaqueline Lischka - Deine Radsport-Trainerin beim Training"
                    width={800}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[#1a4b84]/10">
                  <p className="text-lg mb-4 text-gray-700">
                    Ich bin Jaqueline Lischka und leidenschaftliche Radsportlerin mit nationaler und internationaler
                    Wettkampferfahrung bringe ich eine einzigartige Perspektive ins Coaching ein. Mein Hintergrund
                    umfasst Arbeit mit Athletinnen im Rad- und Laufsport und ein tiefes Verständnis für die spezifischen
                    Herausforderungen und Chancen, denen sie im Sport begegnen.
                  </p>
                  <p className="text-lg mb-4 text-gray-700">
                    Meine Coaching-Philosophie verbindet modernste Trainingstechniken (Zyklusgesteuertes Training) mit
                    einem ganzheitlichen Ansatz zur Athletenentwicklung. Ob du dich auf deine erste Langstreckenfahrt,
                    Radmarathon, Ultra Bike Race vorbereitest oder aufs Podium zielst, ich begleite und unterstütze dich
                    bei jedem Tritt in die Pedale.
                  </p>
                  <p className="text-lg text-gray-700">
                    Gemeinsam werden wir Grenzen überwinden, Ziele erreichen und mehr Menschen, insbesondere Frauen,
                    dazu inspirieren, die Freude am Radsport zu entdecken!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="preise" className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1a4b84]">Preise und Pakete</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Einsteiger-Paket */}
              <div className="bg-white/90 p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[#1a4b84]">Einsteiger-Paket</h3>
                <ul className="mb-6 flex-grow">
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Monatlicher Trainingsplan
                  </li>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Wöchentliches Check-in
                  </li>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> E-Mail-Support
                  </li>
                </ul>
                <p className="text-2xl font-bold text-[#1a4b84] mb-4">€99 / Monat</p>
                <a
                  href="#kontakt"
                  className="bg-[#1a4b84] text-white py-2 px-4 rounded-full text-center hover:bg-[#4a6d58] transition duration-300"
                >
                  Kontakt
                </a>
              </div>

              {/* Fortgeschrittenen-Paket */}
              <div className="bg-white/90 p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[#1a4b84]">Fortgeschrittenen-Paket</h3>
                <ul className="mb-6 flex-grow">
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Individueller Trainingsplan
                  </li>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Zweiwöchentliche Video-Calls
                  </li>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Leistungsanalyse
                  </li>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Prioritäts-Support
                  </li>
                </ul>
                <p className="text-2xl font-bold text-[#1a4b84] mb-4">€199 / Monat</p>
                <a
                  href="#kontakt"
                  className="bg-[#1a4b84] text-white py-2 px-4 rounded-full text-center hover:bg-[#4a6d58] transition duration-300"
                >
                  Kontakt
                </a>
              </div>

              {/* Profi-Paket */}
              <div className="bg-white/90 p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[#1a4b84]">Profi-Paket</h3>
                <ul className="mb-6 flex-grow">
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Maßgeschneiderter Trainingsplan
                  </li>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Wöchentliche Video-Calls
                  </li>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> Ernährungsberatung
                  </li>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#4a6d58]" /> 24/7 Support
                  </li>
                </ul>
                <p className="text-2xl font-bold text-[#1a4b84] mb-4">€249 / Monat</p>
                <a
                  href="#kontakt"
                  className="bg-[#1a4b84] text-white py-2 px-4 rounded-full text-center hover:bg-[#4a6d58] transition duration-300"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-16 bg-[#1a4b84]/80 backdrop-blur-sm text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Bereit, dein Radsport-Potenzial zu entfalten?</h2>
            <div className="max-w-md mx-auto">
              <p className="text-center mb-8">
                Kontaktiere mich noch heute für eine kostenlose Beratung und lass uns deine Reise zum Radsport-Erfolg
                beginnen!
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:coach@femalecycling.at"
                  className="flex items-center bg-white text-[#1a4b84] py-2 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-Mail senden
                </a>
                <a
                  href="https://calendly.com/femalecyclingcoach/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white text-[#1a4b84] py-2 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Termin buchen
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-700 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-3">
            <a
              href="https://www.instagram.com/ridewithjacky?igsh=MXJuZWg2MWRjc3NuMw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#191340] transition-colors"
              aria-label="Folge mir auf Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Female Cycling Coach. Alle Rechte vorbehalten.</p>
          <div className="mt-3 text-xs text-gray-500">
            <p>Jaqueline Lischka | Mühlgrundgasse 26, 1220 Wien | info@femalecycling.at</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
