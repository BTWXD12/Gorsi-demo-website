"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-500 ease-in-out ${
        isScrolled ? "h-16 bg-transparent backdrop-blur-md" : "h-20 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div
            className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
              isScrolled
                ? "transform translate-x-0 lg:translate-x-[calc(50vw-275px)]"
                : "transform translate-x-0"
            }`}
          >
            <Link
              href="/"
              className="flex items-center"
            >
              <img
                src="/logo/grgorsi_logo.png"
                alt="G. R. Gorsi & Co. Logo"
                className={`transition-all duration-500 ease-in-out object-contain ${
                  isScrolled ? "h-8 w-auto" : "h-10 w-auto"
                }`}
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'brightness(1.1) contrast(1.1)'
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className={`hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
              isScrolled
                ? "opacity-0 pointer-events-none scale-95"
                : "opacity-100 pointer-events-auto scale-100"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-sans font-medium tracking-wide text-black hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`hidden lg:block transition-all duration-500 ease-in-out ${
              isScrolled
                ? "transform translate-x-0 lg:-translate-x-[calc(50vw-375px)]"
                : "transform translate-x-0"
            }`}
          >
            <Button
              asChild
              className="bg-black text-white font-sans font-semibold tracking-wide hover:bg-gray-800 transition-all"
              size={isScrolled ? "sm" : "default"}
            >
              <a href="#contact">Book a Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-black hover:bg-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-sans font-medium tracking-wide text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button 
              asChild 
              className="w-full bg-black text-white font-sans font-semibold tracking-wide hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contact">Book a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
