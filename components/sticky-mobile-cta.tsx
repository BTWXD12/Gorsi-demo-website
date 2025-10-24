"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <Button
          asChild
          className="w-full min-h-[52px] bg-[#00918C] text-white hover:bg-[#00918C]/90 font-semibold text-base shadow-lg"
        >
          <a href="#contact" className="flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            Book a Consultation
          </a>
        </Button>
      </div>
    </div>
  )
}

