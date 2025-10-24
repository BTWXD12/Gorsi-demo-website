"use client"

import { HeroSection } from "@/components/ui/hero-section-2"

export default function HeroSectionWrapper() {
  return (
    <HeroSection
      title={
        <>
          <span className="text-[#3CB371]">Maximize Tax Savings</span>{" "}
          <span className="inline-block">& <span className="text-blue-600">Grow Your Business</span></span> <span className="inline-block">with <span className="text-[#E6BD37]">Confidence</span></span>
        </>
      }
      subtitle="Expert chartered accountants helping business owners and entrepreneurs save an average of 32% on taxes while ensuring full compliance. Get strategic financial guidance that drives real growth."
      primaryAction={{
        text: "Get Your Free Tax Review",
        href: "#contact",
      }}
      secondaryAction={{
        text: "Call Now",
        href: "tel:+923188926326",
      }}
      backgroundImage="/professional-accountant-working-with-financial-cha.jpg"
      contactInfo={{
        website: "grgorsi-accountants.com",
        phone: "+92-318-8926326",
        address: "123 Business Avenue, Lahore, Pakistan",
      }}
      className="min-h-screen"
    />
  )
}
