"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))
  const isGroupActive = (children?: { href: string }[]) => children?.some((c) => isActive(c.href)) ?? false

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
    { label: "Stories", href: "/stories" },
    { label: "Kontakt", href: "/kontakt" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="h-full hidden md:block">
        <ul className="flex h-full items-center gap-6 lg:gap-9">
          {navItems.map((item) => {
            const groupActive = isGroupActive(item.children)
            const active = item.children ? groupActive : isActive(item.href)
            return (
              <li
                key={item.label}
                className="flex items-center relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <div ref={dropdownRef} className="flex items-center">
                    <button
                      className={`flex items-center rounded-full text-sm lg:text-[15px] transition-colors duration-200 touch-manipulation ${
                        active
                          ? "border border-[#191340] px-4 py-1.5 font-semibold text-[#191340]"
                          : "px-1 py-1.5 font-medium text-[#191340]/80 hover:text-[#191340]"
                      }`}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      type="button"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-3.5 w-3.5" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full right-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black/5 z-50"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={`block px-4 py-2.5 text-sm touch-manipulation ${
                                  isActive(child.href)
                                    ? "font-semibold text-[#191340]"
                                    : "text-[#191340]/80 hover:text-[#191340] hover:bg-gray-50"
                                }`}
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
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full text-sm lg:text-[15px] transition-colors duration-200 touch-manipulation ${
                      active
                        ? "border border-[#191340] px-4 py-1.5 font-semibold text-[#191340]"
                        : "px-1 py-1.5 font-medium text-[#191340]/80 hover:text-[#191340]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
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
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              ref={mobileMenuRef}
              className="fixed top-16 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 max-h-[calc(100vh-4rem)] max-h-[calc(100dvh-4rem)] overflow-y-auto mobile-nav overscroll-contain"
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
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`block py-4 text-base sm:text-lg min-h-[44px] flex items-center touch-manipulation ${
                        isActive(item.href) ? "font-bold text-[#191340]" : "text-[#191340]/80"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          </>
        )}
      </div>
    </>
  )
}
