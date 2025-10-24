"use client"

import { Users } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Alexander Thompson",
      role: "Co-Founder / Managing Partner",
      description: "A seasoned Chartered Accountant by profession and a humanitarian & environmentalist by heart. He is a member of Institute of Chartered Accountants of Pakistan and Pakistan Institute of Public Finance & Accounts.",
    },
    {
      name: "Sarah Mitchell",
      role: "Co-Founder / Executive Director",
      description: "A member of Chartered Certified Financial Consultant (Canada) and Chartered Accountant (Finalist) from the Institute of Chartered Accountants of Pakistan. He brings with him vast experience of financial and non-financial sectors.",
    },
  ]

  return (
    <section id="team" className="scroll-mt-24 md:scroll-mt-28 min-h-screen flex items-center py-12 sm:py-16 lg:py-20 bg-gradient-to-bl from-white via-[#f0f5fb] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#1F2937] mb-4 sm:mb-6 tracking-tight px-2">
            Meet Our Expert Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-sans text-[#374151] max-w-3xl mx-auto leading-relaxed px-2">
            Our experienced chartered accountants are dedicated to providing personalized financial solutions 
            that help your business thrive. With decades of combined expertise, we're here to guide you every step of the way.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-[16px] sm:rounded-[20px] overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-95 cursor-pointer"
            >
              {/* Photo Skeleton */}
              <div className="relative h-80 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-500" />
                  </div>
                  <div className="text-gray-500 text-sm font-medium">Photo Placeholder</div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1F2937] mb-2">
                  {member.name}
                </h3>
                <div className="w-12 h-1 bg-[#00918C] rounded-full mb-3"></div>
                <p className="text-[#00918C] font-sans font-semibold mb-3 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-[#374151] font-sans leading-relaxed text-sm sm:text-base">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

