import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Heart, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

interface StoryData {
  slug: string
  title: string
  subtitle: string
  image: string
  author: string
  date: string
  readingTime: string
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
    subtitle: "1.400km, 25.000 Höhenmeter, kein Support - Eine Reise durch Marokko",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bildschirmfoto%202026-05-13%20um%2015.33.53-ZxLEb2vddIUTtM0xC5zz2RTtXRhlAz.png",
    author: "Jaqueline Lischka",
    date: "6. Februar 2026",
    readingTime: "8 Min. Lesezeit",
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
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px] overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Back Button */}
        <Link
          href="/stories"
          className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Zurück zu Stories</span>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              {story.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl text-pretty">
              {story.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          {/* Author Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-gray-200 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#191340] flex items-center justify-center">
                <span className="text-white font-semibold">JL</span>
              </div>
              <div>
                <p className="font-medium text-[#191340]">{story.author}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {story.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {story.readingTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-sm text-gray-600"
                aria-label="Story teilen"
              >
                <Share2 className="w-4 h-4" />
                Teilen
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-rose-50 hover:border-rose-200 transition-colors text-sm text-gray-600 hover:text-rose-500"
                aria-label="Story liken"
              >
                <Heart className="w-4 h-4" />
                Gefällt mir
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            {story.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl sm:text-3xl font-bold text-[#191340] mt-12 mb-6"
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg"
                  >
                    {block.text}
                  </p>
                )
              }
              if (block.type === "image" && block.src) {
                return (
                  <div key={index} className="my-8 rounded-xl overflow-hidden">
                    <Image
                      src={block.src}
                      alt={block.alt || ""}
                      width={800}
                      height={500}
                      className="w-full object-cover"
                    />
                  </div>
                )
              }
              return null
            })}
          </div>

          {/* Back to Stories */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-[#4a6d58] hover:text-[#3a5d48] font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Zurück zu allen Stories
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
