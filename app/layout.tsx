import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "./components/navigation"
import { Instagram } from "lucide-react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Female Cycling Coach",
  description: "Professionelles Coaching und maßgeschneiderte Trainingspläne für Radfahrerinnen",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={inter.className}>
        <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center py-2 flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/female%20cycling%20coach_cropped-FbUKs8gA07vLDiXMW5OFSzUdijlNns.svg"
                alt="Female Cycling Coach Logo"
                width={240}
                height={43}
                priority
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </Link>
            <Navigation />
          </div>
        </header>
        <main className="pt-16 sm:pt-20">{children}</main>
        <footer className="bg-gray-100 text-gray-700 py-4 sm:py-6 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-2 sm:mb-3">
              <a
                href="https://www.instagram.com/ridewithjacky?igsh=MXJuZWg2MWRjc3NuMw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#191340] transition-colors p-2"
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
        </footer>
      </body>
    </html>
  )
}
