"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
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
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center safari-flex-fix">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#191340] p-2 rounded-md hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-16 sm:top-20 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto mobile-nav"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.label} className="px-4 sm:px-6">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-4 text-[#191340] text-base sm:text-lg min-h-[44px] touch-manipulation"
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            openDropdown === item.label ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <ul className="pl-4 pb-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block py-3 text-[#191340] text-base min-h-[44px] flex items-center touch-manipulation"
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
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-[#191340] text-base sm:text-lg min-h-[44px] flex items-center touch-manipulation"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
