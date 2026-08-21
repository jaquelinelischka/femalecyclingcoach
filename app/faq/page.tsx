"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ-Daten
const faqData = [
  {
    question: "Was macht ein Female Cycling Coach genau?",
    answer:
      "Ein Female Cycling Coach spezialisiert sich auf das Training und die Betreuung von Frauen im Radsport. Der weibliche Körper hat eine eigene Physiologie, und Frauen sollten nicht wie kleine Männer trainieren. Das Coaching umfasst Trainingspläne in Abstimmung mit dem hormonellen Menstruationszyklus, Techniktraining, Ernährungstipps und mentale Unterstützung.",
  },
  {
    question: "Ist dein Coaching nur für Frauen oder auch für Männer?",
    answer:
      "Mein Coaching ist speziell auf die Bedürfnisse von Frauen ausgerichtet, aber ich betreue auch Männer, die von meiner Trainingsmethodik profitieren.",
  },
  {
    question: "Bietest du Online-Coaching oder auch persönliche Trainings an?",
    answer:
      "Ich biete sowohl Online-Coaching als auch persönliche Trainings an. Je nach deinen Bedürfnissen und deinem Wohnort können wir das Coaching individuell anpassen. Technik-Trainings führe ich grundsätzlich persönlich durch und biete dazu auch spezielle Kurse an.",
  },
  {
    question: "Kann ich ein Probetraining oder eine Erstberatung buchen?",
    answer:
      "Ja! Ich biete eine kostenlose Erstberatung an, um deine Ziele zu besprechen und zu sehen, ob mein Coaching für dich attraktiv ist. Trainerin zu sein ist auch eine persönliche Komponente – mir ist wichtig, dass sich Athletinnen wohlfühlen.",
  },
  {
    question: "Wie viele Jahre Erfahrung hast du als Radsport-Coach?",
    answer:
      "Ich betreue seit zwei Jahren Radfahrerinnen, Läuferinnen und Triathletinnen – von Anfängerinnen bis hin zu hoch ambitionierten Leistungssportlerinnen.",
  },
  {
    question: "Für welche Leistungsstufen ist dein Coaching geeignet?",
    answer:
      "Mein Coaching ist für alle Leistungsstufen geeignet – von Anfängerinnen, die ihre ersten Kilometer auf dem Rad absolvieren, bis zu Fortgeschrittenen, die an Wettkämpfen teilnehmen.",
  },
  {
    question: "Wie funktioniert dein Trainingsplan?",
    answer:
      "Mein Trainingsplan basiert auf sportwissenschaftlichen Prinzipien und ist individuell auf dein Leistungsniveau, deine Ziele und deine Verfügbarkeit abgestimmt. Er beinhaltet eine periodisierte Belastungssteuerung, Trainingszonen basierend auf Herzfrequenz oder Wattwerten sowie gezielte Erholungsphasen zur Leistungssteigerung.",
  },
  {
    question: "Wie oft sollte ich trainieren, um Fortschritte zu sehen?",
    answer:
      "Das hängt von deinem Ziel und deinem aktuellen Fitnesslevel ab. In der Regel empfehle ich 3-5 strukturierte Trainingseinheiten pro Woche.",
  },
  {
    question: "Kannst du mir helfen, mich auf ein Ultra-Rennen oder einen Radmarathon vorzubereiten?",
    answer:
      "Ja, ich erstelle individuelle Trainingspläne für die Rennvorbereitung, einschließlich spezifischer Intervalle, Taktik- und Ernährungsstrategien für den Wettkampf.",
  },
  {
    question: "Welche Ausrüstung brauche ich für dein Coaching?",
    answer:
      "Ein Rennrad oder Gravelbike, einen Fahrradcomputer und eine App zur Trainingsaufzeichnung (z. B. TrainingPeaks) sowie je nach Plan eine Indoor-Trainingsmöglichkeit wie eine Rolle oder einen Smart Trainer.",
  },
  {
    question: "Wie kann ich dein Coaching buchen?",
    answer:
      "Du kannst mich über meine Webseite kontaktieren und ein kostenloses Erstgespräch vereinbaren, um dein Coaching zu starten. Es gibt auch ein Starterpaket mit 8 Wochen Trainingsplanung, um herauszufinden, wie es sich anfühlt, professionell gecoacht zu werden.",
  },
  {
    question: "Was kostet ein Personal Coaching?",
    answer:
      "Meine Coaching-Pakete starten ab 99 Euro pro Monat. Die Preise variieren je nach Betreuungsumfang. Schau unter der Rubrik 'Preise' die unterschiedlichen Coaching-Pakete an.",
  },
  {
    question: "Gibt es verschiedene einmalige Coaching-Pakete oder nur Abo-Modelle?",
    answer:
      "Ich biete verschiedene Coaching-Modelle an – von monatlichen Trainingsplänen bis hin zu persönlichem 1:1 Coaching und wöchentlicher Rundumbetreuung. Bei allen Modellen bekommst du regelmäßiges Feedback.",
  },
  {
    question: "Welches Rennrad empfiehlst du für Anfängerinnen?",
    answer:
      "Ein leichtes Alu- oder Carbonrennrad mit einer Endurance-Geometrie ist ideal für Einsteigerinnen. Marken wie Rose, Canyon, Specialized oder Trek bieten gute Optionen. Aber auch ein gebrauchtes Rennrad in der richtigen Größe ist für den Anfang eine gute Wahl.",
  },
  {
    question: "Brauche ich ein Wattmesssystem für dein Coaching?",
    answer:
      "Ja, es ist hilfreich und macht das Coaching professioneller. Du kannst auch mit Herzfrequenztraining starten oder nach Gefühl trainieren. Die Kombination aus allen drei Methoden – Watt, Herzfrequenz und RPE (Rate of Perceived Exertion) – ist jedoch am effektivsten.",
  },
  {
    question: "Welche Apps oder Tools empfiehlst du für das Training?",
    answer:
      "Strava, TrainingPeaks, HRV4Training, Intervals.icu sowie Garmin oder Wahoo SYSTM sind großartige Tools zur Trainingsaufzeichnung und Analyse.",
  },
]

// FAQ-Item Komponente
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[#191340]/10 last:border-0">
      <button
        className="flex w-full min-h-[44px] items-start justify-between py-5 text-left focus:outline-none sm:py-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="pr-4 text-base font-semibold leading-relaxed text-[#191340] sm:text-lg">{question}</h3>
        <span className={`ml-6 flex-shrink-0 transition-colors ${isOpen ? "text-[#FF5A1F]" : "text-[#191340]"}`}>
          {isOpen ? <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" /> : <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 sm:pb-6">
          <p className="text-sm leading-relaxed text-[#191340]/70 sm:text-base">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="border-b border-[#191340]/10">
        <div className="container mx-auto px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-40">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">Support</span>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-[#191340] text-balance sm:text-6xl lg:text-7xl">
            Häufige Fragen
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#191340]/70 sm:text-lg">
            Alles Wichtige rund um Coaching, Training und Zusammenarbeit – auf einen Blick.
          </p>
        </div>
      </section>

      {/* FAQ LISTE */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div>
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-[#191340] p-8 text-center sm:p-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Noch Fragen offen?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Melde dich einfach – ich beantworte dir gerne alles in einem persönlichen Gespräch.
            </p>
            <a
              href="/kontakt"
              className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#191340] transition-colors duration-200 hover:bg-[#FF5A1F] hover:text-white"
            >
              Kontaktiere mich
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
