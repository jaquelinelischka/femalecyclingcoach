import { BikeIcon as Bicycle, User } from "lucide-react"
import Image from "next/image"

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/354020941.JPG-cUoM2yyZRgHBmL9RzupWsQAKKbgwCd.jpeg"
          alt="Radsportlerin meistert technisch anspruchsvolle Passage"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a4b84]/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg leading-tight">
            Meine Leistungen
          </h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* First Service */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <Bicycle className="w-10 h-10 sm:w-12 sm:h-12 text-[#4a6d58] mb-4 sm:mb-6" />
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#1a4b84]">
                Individueller Trainingsplan
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Maßgeschneiderte Programme, die auf deine Ziele, dein Fitnessniveau und deinen Zeitplan abgestimmt sind,
                mit Erkenntnissen aus langjähriger Erfahrung im Coaching von Radsportlerinnen und Triathletinnen.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/354030508.JPG-qkf8aeHqYrnT5Ny1LjEsk4x8ZsIFYa.jpeg"
              alt="Radsportlerin führt Gruppe an"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        </div>

        {/* Second Service */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/354020941.JPG-cUoM2yyZRgHBmL9RzupWsQAKKbgwCd.jpeg"
              alt="Technisches Training in anspruchsvollem Gelände"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <User className="w-10 h-10 sm:w-12 sm:h-12 text-[#4a6d58] mb-4 sm:mb-6" />
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#1a4b84]">Persönliches Coaching</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Individuelle Betreuung, Technik-Training und kontinuierliche Unterstützung, um deine Radsportziele zu
                erreichen, unabhängig von deinem Ausgangspunkt. Profitiere von meiner Erfahrung als aktive Radsportlerin
                und Trainerin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
