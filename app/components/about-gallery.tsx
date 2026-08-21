import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
}

const images: GalleryImage[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8266.JPG-QXgPfb0cbNMt0zDa9wlxV6lBA1VDz3.jpeg",
    alt: "Peloton auf einer Landstraße durch grüne Hügellandschaft",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8265.JPG-SPMEGMZpKOwEI8NhNwLi320jrv17zN.jpeg",
    alt: "Jaqueline im Renntrikot in dynamischer Fahrposition",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8274.JPG-2kAJPJvP0MgmfBoAExpPBNMaAhqaCG.jpeg",
    alt: "Team feiert lachend mit Getränken nach dem Rennen",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-8BSLkbcYlJ8jZPJP8lC1j5KLvMbIEa.jpeg",
    alt: "Fahrerinnen Seite an Seite im Rennen",
  },
]

// Versetztes Layout wie bei 808project – jedes Bild leicht anders positioniert
const layout = [
  "lg:col-span-5 lg:col-start-1 lg:mt-24 aspect-[4/3]",
  "lg:col-span-6 lg:col-start-7 lg:-mt-8 aspect-[3/4]",
  "lg:col-span-6 lg:col-start-2 lg:mt-8 aspect-[3/2]",
  "lg:col-span-4 lg:col-start-9 lg:mt-16 aspect-[4/5]",
]

export function AboutGallery() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">Impressionen</span>
          <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#191340] text-balance sm:text-5xl lg:text-6xl">
            Racing, training &amp; those special days
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {images.map((img, i) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl bg-[#191340]/5 ${layout[i]}`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
