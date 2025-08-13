import { CheckCircle } from "lucide-react"

export default function Preise() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#1a4b84]">
          Preise und Pakete
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#1a4b84]">Einsteiger-Paket</h2>
            <ul className="mb-6 sm:mb-8 flex-grow space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Monatlicher Trainingsplan</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Wöchentliches Check-in</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">E-Mail-Support</span>
              </li>
            </ul>
            <p className="text-xl sm:text-2xl font-bold text-[#1a4b84] mb-4 sm:mb-6">€149 / Monat</p>
            <a
              href="https://calendly.com/femalecyclingcoach/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a4b84] text-white py-3 px-4 rounded-full text-center hover:bg-[#4a6d58] transition duration-300 min-h-[44px] flex items-center justify-center text-sm sm:text-base"
            >
              Kontaktiere mich
            </a>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col border-2 border-[#1a4b84] md:col-span-2 xl:col-span-1">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#1a4b84]">Fortgeschrittenen-Paket</h2>
            <ul className="mb-6 sm:mb-8 flex-grow space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Individueller Trainingsplan</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Zweiwöchentliche Video-Calls</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Leistungsanalyse</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Prioritäts-Support</span>
              </li>
            </ul>
            <p className="text-xl sm:text-2xl font-bold text-[#1a4b84] mb-4 sm:mb-6">€199 / Monat</p>
            <a
              href="https://calendly.com/femalecyclingcoach/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a4b84] text-white py-3 px-4 rounded-full text-center hover:bg-[#4a6d58] transition duration-300 min-h-[44px] flex items-center justify-center text-sm sm:text-base"
            >
              Kontaktiere mich
            </a>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:col-start-2 xl:col-start-auto">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#1a4b84]">Profi-Paket</h2>
            <ul className="mb-6 sm:mb-8 flex-grow space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Maßgeschneiderter Trainingsplan</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Wöchentliche Video-Calls</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Praxisnahe Ernährungstipps</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#4a6d58] flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">24/7 Support</span>
              </li>
            </ul>
            <p className="text-xl sm:text-2xl font-bold text-[#1a4b84] mb-4 sm:mb-6">€249 / Monat</p>
            <a
              href="https://calendly.com/femalecyclingcoach/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a4b84] text-white py-3 px-4 rounded-full text-center hover:bg-[#4a6d58] transition duration-300 min-h-[44px] flex items-center justify-center text-sm sm:text-base"
            >
              Kontaktiere mich
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
