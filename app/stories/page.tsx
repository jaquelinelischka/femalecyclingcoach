import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, ChevronRight, BookOpen } from "lucide-react"

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
  authorImage?: string
  date: string
  readingTime: string
  category: string
}

const stories: Story[] = [
  {
    slug: "atlas-mountain-race-2026",
    title: "Atlas Mountain Race 2026",
    excerpt: "Es gibt Rennen, die fühlen sich an wie Sport. Und dann gibt es das Atlas Mountain Race. Das fühlt sich an wie ein anderes Leben, das du dir für acht Tage ausleihst...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2855-HMBNkeBsarCMy3SSJd3JQDWCyGA4DC.jpeg",
    author: "Jaqueline Lischka",
    date: "6. Februar 2026",
    readingTime: "8 Min.",
    category: "Rennerlebnis",
  },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* HERO – full-bleed */}
      <div className="relative min-h-[65vh] w-full overflow-hidden bg-[#191340]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8260%202.JPG-w8ysDY9HjdSoh5QfACgC4yNWLiKojZ.jpeg"
          alt="Rennfahrerin auf einer Bergstraße vor Alpenpanorama"
          fill
          className="object-cover object-[center_30%]"
          priority
          sizes="100vw"
          style={{
            transform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191340] via-[#191340]/50 to-black/30" />
        <div className="relative z-10 flex min-h-[65vh] items-end">
          <div className="container mx-auto px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
              <BookOpen className="h-4 w-4" />
              Athletinnen-Geschichten
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-white text-balance sm:text-6xl lg:text-8xl">
              Stories
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Echte Erfahrungen, echte Emotionen, echte Abenteuer auf dem Rad.
            </p>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
              Neueste Geschichten
            </h2>
            <div className="h-1 w-12 rounded-full bg-[#FF5A1F]" />
          </div>

          {/* Stories Grid */}
          <div className="space-y-8 sm:space-y-10">
            {stories.map((story) => (
              <article key={story.slug} className="group">
                <Link href={`/stories/${story.slug}`} className="block">
                  <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Container */}
                      <div className="relative w-full lg:w-[55%] aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                          <span className="inline-block bg-[#191340] text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
                            {story.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10 lg:w-[45%]">
                        <div>
                          {/* Meta Info */}
                          <div className="flex items-center gap-4 mb-5 text-sm text-gray-500">
                            <span className="font-medium text-[#191340]">{story.author}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>{story.date}</span>
                          </div>

                          {/* Title */}
                          <h3 className="mb-4 text-2xl font-black uppercase leading-tight tracking-tight text-[#191340] transition-colors duration-300 text-balance group-hover:text-[#FF5A1F] sm:text-3xl lg:text-4xl">
                            {story.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 text-pretty line-clamp-3">
                            {story.excerpt}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{story.readingTime} Lesezeit</span>
                          </div>
                          
                          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#FF5A1F] transition-all duration-300 group-hover:gap-3">
                            <span>Weiterlesen</span>
                            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {stories.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">Noch keine Stories vorhanden.</p>
            </div>
          )}

          {/* Coming Soon Teaser */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 bg-[#191340] rounded-xl sm:rounded-2xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Mehr Stories kommen bald
            </h3>
            <p className="text-white/70 max-w-lg mx-auto">
              Folge uns, um keine Geschichte zu verpassen. Jede Athletin hat ihre eigene, einzigartige Reise zu erzählen.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
