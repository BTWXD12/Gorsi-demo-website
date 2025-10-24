"use client"

import Image from "next/image"
import { Clock, Zap, TrendingUp, Lock } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: "Always on Time",
      description: "We respect your time — delivering every project with punctuality and precision.",
    },
    {
      icon: Zap,
      title: "Hard Working",
      description: "We stay resilient through every challenge, giving our best no matter the odds.",
    },
    {
      icon: TrendingUp,
      title: "Profit Maximization",
      description: "Our services are designed to create real value and help your business grow.",
    },
    {
      icon: Lock,
      title: "Confidentiality",
      description: "Your information stays secure with us — trust and privacy are non-negotiable.",
    },
  ]

  return (
    <section id="why-us" className="scroll-mt-24 md:scroll-mt-28 min-h-screen flex items-center py-12 sm:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-tr from-white via-[#f0f5fb] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/professional-accountant-office-meeting-financial-p.jpg"
                alt="Professional accountant meeting"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#00918C] rounded-2xl -z-10" />
          </div>

          {/* Right Column: Content */}
          <div>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-1 bg-[#00918C] rounded-full" />
              <span className="text-[#00918C] font-sans font-bold text-sm uppercase tracking-[0.15em]">
                Why Choose Us?
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-4 leading-tight tracking-tight">
              When You{" "}
              <span className="bg-[#00918C] text-white px-3 py-1 rounded-lg inline-block">
                Need
              </span>{" "}
              Financial
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-8 leading-tight tracking-tight">
              <span className="bg-[#00918C] text-white px-3 py-1 rounded-lg inline-block">
                Clarity
              </span>{" "}
              & Expertise
            </h2>

            {/* Description */}
            <p className="text-muted-foreground font-sans text-base md:text-lg mb-12 leading-relaxed">
              We provide comprehensive accounting and financial advisory services to help your business thrive. 
              Our experienced team delivers accurate, timely financial insights and strategic guidance tailored to 
              your unique needs. With a proven track record of helping businesses succeed, we&apos;re committed to being 
              your trusted partner in financial excellence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#00918C]/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#00918C]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
