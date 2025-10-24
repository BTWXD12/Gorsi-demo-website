"use client"

import { BarChart3, FileText, Briefcase } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Accountancy",
    description: "Comprehensive accounting solutions tailored to your business needs",
    badge: "Essential",
    subServices: [
      "Book-keeping",
      "Business Process Outsourcing",
      "Payroll & Employee Funds",
      "Fixed Assets Management",
      "SoP Development & Implementation",
      "Risk Management"
    ]
  },
  {
    icon: FileText,
    title: "Audit Services",
    description: "Professional audit and assurance services ensuring accuracy and compliance",
    badge: "Premium",
    subServices: [
      "Statutory Audit",
      "Internal Audit",
      "Efficiency Audit",
      "Forensic Accountancy",
      "Agreed-upon Exercises"
    ]
  },
  {
    icon: BarChart3,
    title: "Tax Services",
    description: "Expert tax planning and compliance to optimize your financial position",
    badge: "Featured",
    subServices: [
      "Income & Sales Tax",
      "Tax Planning",
      "Compliance Services",
      "Tax Advisory",
      "Appellate Services",
      "Exemptions & Refunds"
    ]
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 md:scroll-mt-28 py-12 sm:py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-[#f0f5fb] to-white">
      <style jsx>{`
        .premium-badge {
          position: absolute;
          overflow: hidden;
          width: 120px;
          height: 120px;
          top: -10px;
          left: -10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .premium-badge {
            width: 150px;
            height: 150px;
          }
        }

        .premium-badge::before {
          content: attr(data-badge);
          position: absolute;
          width: 150%;
          height: 32px;
          background-image: linear-gradient(45deg, #ff6547 0%, #ffb144 51%, #ff7053 100%);
          transform: rotate(-45deg) translateY(-16px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 5px 10px rgba(0,0,0,0.23);
          font-size: 0.65rem;
        }

        @media (min-width: 640px) {
          .premium-badge::before {
            height: 40px;
            transform: rotate(-45deg) translateY(-20px);
            letter-spacing: 0.1em;
            font-size: 0.75rem;
          }
        }

        .premium-badge::after {
          content: '';
          position: absolute;
          width: 10px;
          bottom: 0;
          left: 0;
          height: 10px;
          z-index: -1;
          box-shadow: 140px -140px #cc3f47;
          background-image: linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%);
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Professional financial solutions designed to help your business grow with confidence and compliance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#00918C] to-[#023d7d] shadow-[0_20px_40px_rgba(3,83,164,0.35)] sm:shadow-[0_25px_50px_rgba(3,83,164,0.4)] cursor-pointer transition-all duration-300 hover:scale-95 sm:hover:scale-90 overflow-hidden"
              >
                {/* Premium Badge */}
                <span className="premium-badge" data-badge={service.badge} />
                
                {/* Icon Container */}
                <div className="relative mb-5 sm:mb-6 mt-6 sm:mt-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#ff6547] to-[#ff7053] text-white shadow-lg">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base mb-5 sm:mb-6">
                  {service.description}
                </p>

                {/* Sub-services List */}
                <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                  {service.subServices.map((subService, subIndex) => (
                    <li key={subIndex} className="text-gray-200 font-sans text-xs sm:text-sm flex items-start">
                      <span className="text-[#ff6547] mr-2 mt-0.5 flex-shrink-0">•</span>
                      <span>{subService}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-white bg-[#ff6547] px-3 sm:px-4 py-2 rounded-lg font-sans font-semibold text-sm sm:text-base tracking-wide hover:bg-[#ff7053] transition-all duration-300"
                >
                  Learn More
                  <span className="ml-2 text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
