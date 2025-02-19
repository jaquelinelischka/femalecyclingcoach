import Image from "next/image"
import { BikeIcon as Bicycle, Calendar, User, Mail, CheckCircle } from "lucide-react"

export default function FemaleCyclingCoachLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#1a4b84] text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Female Cycling Coach</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#leistungen" className="hover:underline">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#ueber-mich" className="hover:underline">
                  Über mich
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
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#1a4b84] to-[#4a6d58] text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Steigere deine Radsportleistung</h2>
              <p className="text-xl mb-6">
                Professionelles Coaching und maßgeschneiderte Trainingspläne für Radfahrer aller Niveaus, mit besonderer
                Expertise im Frauenradsport.
              </p>
              <a
                href="#kontakt"
                className="bg-white text-[#1a4b84] py-2 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Jetzt starten
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwY3ljbGlzdHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Radsportlerin auf der Straße"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </section>

        <section id="leistungen" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1a4b84]">Meine Leistungen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Bicycle className="w-12 h-12 text-[#4a6d58] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1a4b84]">Individuelle Trainingspläne</h3>
                <p className="text-gray-700">
                  Maßgeschneiderte Programme, die auf deine Ziele, dein Fitnessniveau und deinen Zeitplan abgestimmt
                  sind, mit Erkenntnissen aus langjähriger Erfahrung im Coaching von Radsportlerinnen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <User className="w-12 h-12 text-[#4a6d58] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1a4b84]">Persönliches Coaching</h3>
                <p className="text-gray-700">
                  Individuelle Betreuung, Technikverfeinerung und kontinuierliche Unterstützung, um deine Radsportziele
                  zu erreichen, unabhängig von deinem Ausgangspunkt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ueber-mich" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1a4b84]">Über mich</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <Image
                  src="https://images.unsplash.com/photo-1594742556520-be7d9d6b2e1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbWFsZSUyMGN5Y2xpbmclMjBjb2FjaHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Radsport-Trainerin"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>
              <div className="md:w-2/3 md:pl-12">
                <p className="text-lg mb-4 text-gray-700">
                  Als leidenschaftliche Radsportlerin mit über einem Jahrzehnt Wettkampferfahrung bringe ich eine
                  einzigartige Perspektive ins Coaching ein. Mein Hintergrund umfasst umfangreiche Arbeit mit
                  Radsportlerinnen und ein tiefes Verständnis für die spezifischen Herausforderungen und Chancen, denen
                  sie im Sport begegnen.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  Meine Coaching-Philosophie verbindet modernste Trainingstechniken mit einem ganzheitlichen Ansatz zur
                  Athletenentwicklung. Ob du dich auf deine erste Langstreckenfahrt vorbereitest oder aufs Podium
                  zielst, ich begleite und unterstütze dich bei jedem Tritt in die Pedale.
                </p>
                <p className="text-lg text-gray-700">
                  Gemeinsam werden wir Grenzen überwinden, Ziele erreichen und mehr Menschen, insbesondere Frauen, dazu
                  inspirieren, die Freude am Radsport zu entdecken!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="preise" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1a4b84]">Preise und Pakete</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
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
                  Auswählen
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col border-2 border-[#1a4b84]">
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
                  Auswählen
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
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
                <p className="text-2xl font-bold text-[#1a4b84] mb-4">€349 / Monat</p>
                <a
                  href="#kontakt"
                  className="bg-[#1a4b84] text-white py-2 px-4 rounded-full text-center hover:bg-[#4a6d58] transition duration-300"
                >
                  Auswählen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-16 bg-[#1a4b84] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Bereit, dein Radsport-Potenzial zu entfalten?</h2>
            <div className="max-w-md mx-auto">
              <p className="text-center mb-8">
                Kontaktiere mich noch heute für eine kostenlose Beratung und lass uns deine Reise zum Radsport-Erfolg
                beginnen!
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:coach@femalecyclingcoach.at"
                  className="flex items-center bg-white text-[#1a4b84] py-2 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-Mail senden
                </a>
                <a
                  href="tel:+43123456789"
                  className="flex items-center bg-white text-[#1a4b84] py-2 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Anruf vereinbaren
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Female Cycling Coach. Alle Rechte vorbehalten.</p>
          <p className="mt-2">
            <a href="https://femalecyclingcoach.at" className="hover:underline">
              femalecyclingcoach.at
            </a>
          </p>
          <div className="mt-4 text-sm">
            <h3 className="font-semibold mb-2">Impressum</h3>
            <p>Jaqueline Lischka</p>
            <p>Mühlgrundgasse 26/7/5</p>
            <p>1220 Wien</p>
            <p>E-Mail: femalecyclingcoach@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

