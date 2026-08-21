"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"

interface NavItem {
  label: string
  href: string
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  // Menü bei Routenwechsel schließen
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Scroll sperren, wenn das Menü offen ist + Escape zum Schließen
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Jaqueline", href: "/about-jaqueline" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Preise", href: "/preise" },
    { label: "FAQ", href: "/faq" },
    { label: "Stories", href: "/stories" },
    { label: "Kontakt", href: "/kontakt" },
  ]

  return (
    <>
      {/* Burger-Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="flex items-center gap-2 text-[#191340] group touch-manipulation min-h-[44px]"
        aria-label="Menü öffnen"
        aria-expanded={menuOpen}
        type="button"
      >
        <span className="hidden sm:inline text-sm font-semibold uppercase tracking-[0.15em]">Menü</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#191340] transition-colors duration-200 group-hover:bg-[#191340] group-hover:text-white">
          <Menu size={18} />
        </span>
      </button>

      {/* Fullscreen Overlay-Menü */}
      <div
        className={`fixed inset-0 z-[60] bg-[#191340] text-white transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "pointer-events-none invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        {/* Top bar innerhalb des Overlays */}
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-8">
          <span className="text-sm font-black uppercase tracking-tight sm:text-base lg:text-lg">
            Female Cycling Coach
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-colors duration-200 hover:bg-white hover:text-[#191340] touch-manipulation"
            aria-label="Menü schließen"
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        {/* Menülinks */}
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="mt-4 flex flex-col sm:mt-8">
            {navItems.map((item, i) => {
              const active = isActive(item.href)
              return (
                <li key={item.href} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center justify-between py-3 sm:py-4 lg:py-5 transition-colors duration-200 ${
                      active ? "text-[#FF5A1F]" : "text-white hover:text-[#FF5A1F]"
                    }`}
                    style={{
                      transitionDelay: menuOpen ? `${i * 40 + 100}ms` : "0ms",
                    }}
                  >
                    <span className="flex items-baseline gap-3 sm:gap-4">
                      <span className="text-xs font-mono text-white/40 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-6 w-6 shrink-0 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:h-8 sm:w-8"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60 sm:mt-12">
            <a
              href="https://www.instagram.com/ridewithjacky?igsh=MXJuZWg2MWRjc3NuMw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a href="mailto:femalecyclingcoach@gmail.com" className="hover:text-white transition-colors">
              femalecyclingcoach@gmail.com
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
