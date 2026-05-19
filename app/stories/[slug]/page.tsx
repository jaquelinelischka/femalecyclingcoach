import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { notFound } from "next/navigation"

interface StoryData {
  slug: string
  title: string
  subtitle: string
  image: string
  author: string
  date: string
  readingTime: string
  category: string
  content: {
    type: "paragraph" | "heading" | "image"
    text?: string
    src?: string
    alt?: string
  }[]
}

const storiesData: Record<string, StoryData> = {
  "atlas-mountain-race-2026": {
    slug: "atlas-mountain-race-2026",
    title: "Atlas Mountain Race 2026",
    subtitle: "Die härteste Edition die Marokko und das AMR je gesehen haben: 1.400km, 25.000 Höhenmeter, kein Support - Eine Reise durch die Wüste.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMR_3421-wJBsuF1RD8vyj3HXTqlzJCxzt6SGcp.jpeg",
    author: "Jaqueline Lischka",
    date: "6. Februar 2026",
    readingTime: "8 Min.",
    category: "Rennerlebnis",
    content: [
      {
        type: "paragraph",
        text: "07:43 Uhr. Garmin. Daneben die Fahrzeit: 03:17h. Seit drei Stunden sitzen Raphi und ich im Sattel und folgen dem engen Lichtkegel unserer Lampen durch eine Landschaft, die im Dunkeln kaum mehr ist als eine Ahnung. Dann, am Horizont: ein schmaler, orangefarbener Streifen. Mit jeder Minute mehr wird daraus der Sonnenaufgang, auf den wir gewartet haben. Er verdrängt die Kälte der Nacht und gibt langsam preis, durch welche karge Welt wir uns in den letzten Stunden gekämpft haben.",
      },
      {
        type: "paragraph",
        text: "Zwei Tage zuvor. Freitagnachmittag. Beni-Mellal, eine Stadt am Fuß des Hohen Atlas. Der Start des Atlas Mountain Race, 1.400km, 25.000 Höhenmeter, kein Support. Wir wussten, was kommen würde – zumindest glaubten wir das.",
      },
      {
        type: "heading",
        text: "Eisiger Start",
      },
      {
        type: "paragraph",
        text: "Pünktlich zum Start kommt die tiefschwarze Wolke vom Regenradar in der Realität an und lässt uns direkt in voller Regenmontur ins Rennen starten. Die ersten Stunden geht es stetig bergauf, begleitet vom anhaltenden Regen. Über die wasserdichten Handschuhe, die wir zuhause noch fast eingepackt hätten, hätten wir uns jetzt natürlich gefreut. Aber so gilt es die 3 Grad Temperatur mit mittlerweile komplett durchnässten Handschuhen zu genießen.",
      },
      {
        type: "paragraph",
        text: "Der Plan ist eigentlich klar: die Nacht durchzufahren und es in einem Zug bis zum Checkpoint 1 bei km 360 zu schaffen. Doch Regen, Kälte und vereiste Straßen bringen uns schnell zurück auf den Boden der Vernunft. Wir entscheiden uns für vier Stunden Schlaf in einem kleinen Hotel entlang der Strecke.",
      },
      {
        type: "paragraph",
        text: "Am nächsten Morgen rollen wir bei Temperaturen um den Gefrierpunkt, aber immerhin ohne Regen los und erklimmen den höchsten Punkt der gesamten Strecke. Auf 2400m Höhe ist die Straße von einer dicken Eisschicht überzogen. Im Schritttempo, manchmal schiebend, geht es voran. Jeder Meter mit Bedacht, bloß keinen Sturz riskieren jetzt.",
      },
      {
        type: "paragraph",
        text: "Und dann, nach langen Stunden in der Dunkelheit, geht die Sonne über dem Hohen Atlas auf und wirft ihr Licht über ein endloses Panorama aus Bergkämmen und Tälern. Die Kälte tritt in den Hintergrund, das Eis, das Unbehagen, die Müdigkeit. All das wird auf einmal nebensächlich. Was bleibt, ist die schiere Weite. Roh, gewaltig und beinahe unwirklich.",
      },
      {
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMR_2742-c7cXFmSUHkHw8cRaOWFxA5coVfvVGh.jpeg",
        alt: "Jaqueline auf dem Bike in der verschneiten Berglandschaft des Atlas bei Sonnenaufgang",
      },
      {
        type: "heading",
        text: "In der Wüste",
      },
      {
        type: "paragraph",
        text: "Der zweite Morgen des Rennens liegt hinter uns und im Kopf haben wir nur ein Ziel: Afra. Eine kleine Wüstenstadt mitten im Nirgendwo, doch für uns die erste Versorgungsmöglichkeit nach 100 Kilometer in der Wüste. Der schmale Pfad schlängelt sich in weichen Kurven durchs Gelände, steile Anstiege und schnelle Abfahrten. Kilometer für Kilometer tauchen wir tiefer in diese Landschaft ein und verlieren jedes Gefühl für Zeit und Distanz.",
      },
      {
        type: "paragraph",
        text: "Die Stunden der steinernen Gleichmäßigkeit werden durch ein unwirkliches Bild unterbrochen. Vor uns taucht auf einmal ein Berber mit seinem Kamel auf. Das Kamel behängt mit einem bunten, handgeknüpften Teppich, leuchtend gegen den staubigen Hintergrund. Sie kommen aus dem Nichts und ziehen, ohne uns eines Blickes zu würdigen, weiter hinein in die Weite.",
      },
      {
        type: "paragraph",
        text: "Genau solche Momente sind es, die Marokko zu etwas Besonderem machen – diese Weite, diese Stille, diese Bilder, die einen vergessen lassen, in welcher Welt man eigentlich unterwegs ist.",
      },
      {
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMR_23-U3x1NI6lidA0XT8O8p1lRDBFjy07oS.jpeg",
        alt: "Traditionelle Olivenpresse in Marokko - ein Einblick in das lokale Leben",
      },
      {
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2891-fhzcIL1vaUwN89vYPWljZW6BqCt08n.jpeg",
        alt: "Frische Orangen auf einem marokkanischen Markt - Energiequelle während des Rennens",
      },
      {
        type: "heading",
        text: "Gegen den Wind",
      },
      {
        type: "paragraph",
        text: "Nachdem sich Regen, Kälte und das Eis irgendwann verabschiedet hatten, kam eine andere bekannte Naturlaune ins Spiel. Der Gegenwind. Machte er Anfangs nur das Fahren langsamer und durchkreuzte somit jegliche Marschtabellen, wurde er im Verlauf des dritten Tages zu einer echten Gefahr.",
      },
      {
        type: "paragraph",
        text: "Etwa 80 Kilometer nach Afra, später Abend, ein kaum befahrener Anstieg. Wir fahren mit ganzer Kraft und kommen kaum voran. Es ist dunkel, der Wind heult unablässig in den Ohren. Die ersten starken Böen von links und rechts lassen sich noch austarieren aber ziemlich schnell merken wir, fahren ist nicht mehr möglich.",
      },
      {
        type: "paragraph",
        text: "Mit der nächsten Böe steht mein Rad waagerecht neben mir und ich habe Mühe es in den Händen zu halten. In der Hocke stehe ich auf einmal da und versuche mit aller Kraft mein Fahrrad festzuhalten. Der Wind peitscht von allen Seiten. An Weiterkommen ist nicht zu denken. Weder vor noch zurück können wir uns bewegen.",
      },
      {
        type: "paragraph",
        text: "Raphi klemmt sein Fahrrad am Straßenrand unter zwei großen Steinen fest und ich versuche mein Fahrrad festzuhalten. Plötzlich, Windstille. Vor uns kommt ein großer LKW zum stehen.",
      },
      {
        type: "paragraph",
        text: "Kurze Zeit später liegen wir im Bett eines Hotels und sind einfach nur dankbar über die unglaubliche Herzlichkeit und Hilfsbereitschaft der Marokkaner, die uns in dieser Nacht geholfen haben.",
      },
      {
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMR_2729-S86feIYlhxvbzKZBZP44OfvXzybWVa.jpeg",
        alt: "Fahren im dichten Nebel - wenn die Sicht auf wenige Meter beschränkt ist",
      },
      {
        type: "heading",
        text: "How to scratch",
      },
      {
        type: "paragraph",
        text: "Tag 4 unseres Rennens. Nach einer langen Nacht im Schlafsack wacht Raphael mit starken Halsschmerzen auf.",
      },
      {
        type: "paragraph",
        text: "Am Abend vorher waren wir nach einem weiteren langen Tag in der Wüste an Checkpoint 2 und somit der Hälfte der Strecke angekommen. Wir merkten, dass wir körperlich und mental schon mehr gegeben hatten, als wir dachten und waren mit den Gedanken bereits dabei, das Rennen zu verlassen. Mit etwas mehr Schlaf am Checkpoint wollten wir neue Energie sammeln und den nächsten Tag entscheiden lassen.",
      },
      {
        type: "paragraph",
        text: "Nun war aber klar, dass es nicht mehr weitergeht.",
      },
      {
        type: "paragraph",
        text: "Es ist leicht zu sagen, dass die Gesundheit vorgeht. Dennoch ist die Entscheidung zum Abbruch bei einem Rennen, was so viel Vorbereitung benötigt und so viel von einem verlangt, extrem schwer.",
      },
      {
        type: "paragraph",
        text: "Was bleibt, sind keine Ergebnisse und keine Zielankünfte. Was bleibt, sind die Bilder und Momente. Sonnenaufgänge, nach eisigen Nächten. Marokkaner, die kaum etwas haben und einem trotzdem mit allem helfen. Orte, die man nicht per Karte findet.",
      },
      {
        type: "paragraph",
        text: "Das Atlas Mountain Race hat mehr von uns verlangt als wir erwartet haben. Aber Marokko hat uns so viel zurückgegeben. Mehr als ein Rennen, mehr als Kilometer. Und eines ist klar: wir kommen wieder.",
      },
      {
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMR_2937-smyIbLATTLCino47WSXceGZx0grXsS.jpeg",
        alt: "Ankunft in einem traditionellen marokkanischen Riad - verdiente Erholung",
      },
      {
        type: "image",
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4530-LKef5CIZnpkA8NJ6awwGOGboxTPUQD.jpeg",
        alt: "Marokkanische Kunst - ein Bild, das die Kultur des Landes einfängt",
      },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = storiesData[slug]

  if (!story) {
    return {
      title: "Story nicht gefunden | Female Cycling Coach",
    }
  }

  return {
    title: `${story.title} | Stories | Female Cycling Coach`,
    description: story.subtitle,
    openGraph: {
      title: story.title,
      description: story.subtitle,
      images: [story.image],
    },
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = storiesData[slug]

  if (!story) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[45vh] sm:h-[55vh] md:h-[65vh] min-h-[320px] overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#191340] via-[#191340]/40 to-transparent" />

        {/* Back Button */}
        <Link
          href="/stories"
          className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full hover:bg-white/20 transition-colors border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Stories</span>
        </Link>

        {/* Category Badge */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
          <span className="inline-block bg-[#4a6d58] text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
            {story.category}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 text-balance leading-tight">
              {story.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl text-pretty">
              {story.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          {/* Author Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-8 border-b border-gray-200 mb-10">
            <div className="flex items-center gap-4">
              {/* Author Avatar with Gradient Border */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4a6d58] to-[#191340] p-0.5">
                  <div className="w-full h-full rounded-full bg-[#191340] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JL</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-[#191340] text-lg">{story.author}</p>
                <p className="text-sm text-gray-500">Female Cycling Coach</p>
              </div>
            </div>
            
            <div className="sm:ml-auto flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#4a6d58]" />
                {story.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#4a6d58]" />
                {story.readingTime} Lesezeit
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {story.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl sm:text-3xl font-bold text-[#191340] mt-10 mb-4 relative pl-4 border-l-4 border-[#4a6d58]"
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed text-base sm:text-lg"
                  >
                    {block.text}
                  </p>
                )
              }
              if (block.type === "image" && block.src) {
                return (
                  <figure key={index} className="my-8 flex justify-center">
                    <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={block.src}
                        alt={block.alt || ""}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </figure>
                )
              }
              return null
            })}
          </div>

          {/* Article Footer */}
          <div className="mt-14 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 text-[#4a6d58] hover:text-[#3a5d48] font-semibold transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Alle Stories entdecken
              </Link>
              
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>Geschrieben von</span>
                <span className="font-medium text-[#191340]">{story.author}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
