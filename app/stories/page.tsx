import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, Eye, Clock, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Stories | Female Cycling Coach",
  description: "Spannende Geschichten und Erlebnisse von Athletinnen - Abenteuer, Rennen und unvergessliche Momente auf dem Rad.",
  alternates: {
    canonical: "https://femalecycling.at/stories",
  },
}

interface Story {
  slug: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readingTime: string
  views: number
  likes: number
}

const stories: Story[] = [
  {
    slug: "atlas-mountain-race-2026",
    title: "Atlas Mountain Race 2026",
    excerpt: "Es gibt Rennen, die fühlen sich an wie Sport. Und dann gibt es das Atlas Mountain Race. Das fühlt sich an wie ein anderes Leben, das du dir für acht Tage ausleihst...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bildschirmfoto%202026-05-13%20um%2015.33.53-ZxLEb2vddIUTtM0xC5zz2RTtXRhlAz.png",
    author: "Jaqueline Lischka",
    date: "6. Feb. 2026",
    readingTime: "8 Min. Lesezeit",
    views: 3319,
    likes: 7,
  },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] min-h-[200px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/354020941.JPG-cUoM2yyZRgHBmL9RzupWsQAKKbgwCd.jpeg"
          alt="Radfahrerin in den Bergen"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          style={{
            transform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191340]/80 via-[#191340]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Stories
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
              Spannende Geschichten und unvergessliche Momente unserer Athletinnen
            </p>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8 sm:space-y-12">
            {stories.map((story) => (
              <article key={story.slug} className="group">
                <Link href={`/stories/${story.slug}`} className="block">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:w-1/2">
                        <div>
                          {/* Author & Meta */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#191340] flex items-center justify-center">
                              <span className="text-white text-sm font-semibold">JL</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#191340]">{story.author}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>{story.date}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-400" />
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {story.readingTime}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191340] mb-4 group-hover:text-[#4a6d58] transition-colors text-balance">
                            {story.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 text-pretty">
                            {story.excerpt}
                          </p>

                          {/* Read More */}
                          <div className="flex items-center text-[#4a6d58] font-medium group-hover:gap-2 transition-all">
                            <span>Weiterlesen</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>

                        {/* Footer Stats */}
                        <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                            <Eye className="w-4 h-4" />
                            <span>{story.views.toLocaleString("de-DE")} Ansichten</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                            <span>{story.likes}</span>
                            <Heart className="w-4 h-4 text-rose-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty State for future */}
          {stories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Noch keine Stories vorhanden.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
