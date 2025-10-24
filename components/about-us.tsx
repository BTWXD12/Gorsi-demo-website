"use client"

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-24 md:scroll-mt-28 min-h-screen flex items-center py-12 sm:py-16 lg:py-20 bg-gradient-to-bl from-white via-[#f0f5fb] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Image */}
          <div className="relative h-80 sm:h-96 lg:h-full min-h-96 order-2 lg:order-1 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="absolute inset-0 bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="/professional-accountant-office-meeting-financial-p.jpg"
                alt="Professional accountant in office setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2 animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
            {/* Heading with accent line */}
            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] text-balance">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-[#00918C] rounded-full"></div>
            </div>

            {/* Paragraph */}
            <div className="space-y-4">
              <p className="font-sans text-base sm:text-lg text-[#374151] leading-relaxed">
                G. R. Gorsi & Co. is a well-established chartered accountancy firm in Pakistan, registered under the Institute of Chartered Accountants Ordinance, 1961. With a strong track record and experienced management, we focus on delivering practical, results-driven solutions.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#374151] leading-relaxed">
                We build close partnerships with our clients to understand their needs and provide tailored services. Our dedicated team combines expertise with a friendly, professional approach to help you succeed.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#374151] leading-relaxed">
                Mr. Ghulam Rasool Gorsi, Managing Partner, is a senior Chartered Accountant and Cost & Management Accountant with over 20 years of experience in Pakistan and Australia. His background spans finance, taxation, audit, and management roles in top firms and major industries.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-6 py-3 bg-[#00918C] text-white rounded-md font-sans font-medium hover:bg-[#00918C]/90 transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
