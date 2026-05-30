"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, X } from "lucide-react"

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Schließe Dropdown bei Klick außerhalb
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Schließe mobile Menü bei Größenänderung des Fensters
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
        setOpenDropdown(null)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Body scroll lock when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Jaqueline", href: "/about-jaqueline" },
    {
      label: "Angebote",
      href: "#",
      children: [
        { label: "Leistungen", href: "/leistungen" },
        { label: "Preise", href: "/preise" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    { label: "Stories", href: "/stories" },
    { label: "Kontakt", href: "/kontakt" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="h-full hidden md:block safari-flex-fix">
        <ul className="flex h-full space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center relative h-full safari-flex-fix"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <div ref={dropdownRef} className="h-full flex items-center safari-flex-fix">
                  <button
                    className="flex items-center text-base lg:text-lg font-medium text-[#191340] hover:text-[#4a6d58] transition-colors duration-200 ease-in-out py-2 safari-flex-fix touch-manipulation"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    type="button"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
                  </button>
                  {openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-0 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <ul className="py-1">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-4 py-3 text-sm text-[#191340] hover:bg-gray-100 hover:text-[#4a6d58] touch-manipulation"
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-base lg:text-lg font-medium text-[#191340] hover:text-[#4a6d58] transition-colors duration-200 ease-in-out
                           relative py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 
                           after:w-0 after:h-0.5 after:bg-[#4a6d58] after:transition-all after:duration-300
                           hover:after:w-full touch-manipulation"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation - Burger Menu */}
      <div className="md:hidden flex items-center safari-flex-fix">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative text-[#191340] p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span className="sr-only">{mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}</span>
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span 
              className={`block h-0.5 w-6 bg-[#191340] rounded-full transition-all duration-300 ease-in-out origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`} 
            />
            <span 
              className={`block h-0.5 w-6 bg-[#191340] rounded-full transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
              }`} 
            />
            <span 
              className={`block h-0.5 w-6 bg-[#191340] rounded-full transition-all duration-300 ease-in-out origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`} 
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 h-full w-[280px] max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-lg font-semibold text-[#191340]">Menü</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Menü schließen"
            >
              <X size={24} className="text-[#191340]" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="overflow-y-auto h-[calc(100%-65px)] overscroll-contain">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div className="border-b border-gray-50">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-6 py-4 text-[#191340] text-base font-medium hover:bg-gray-50 active:bg-gray-100 min-h-[56px] touch-manipulation transition-colors"
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                          openDropdown === item.label ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <ul className="bg-gray-50 py-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block px-8 py-3 text-[#191340] text-base hover:bg-gray-100 active:bg-gray-200 min-h-[48px] flex items-center touch-manipulation transition-colors"
                                onClick={() => {
                                  setOpenDropdown(null)
                                  setMobileMenuOpen(false)
                                }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-6 py-4 text-[#191340] text-base font-medium hover:bg-gray-50 active:bg-gray-100 min-h-[56px] flex items-center border-b border-gray-50 touch-manipulation transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
