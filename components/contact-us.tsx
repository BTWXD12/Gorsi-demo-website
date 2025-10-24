import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react"

export default function ContactUs() {
  return (
    <section id="contact" className="scroll-mt-24 md:scroll-mt-28 relative min-h-screen flex items-center py-12 sm:py-16 lg:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-[#f0f5fb] to-white">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#1F2937] mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg font-sans text-[#374151] max-w-2xl mx-auto leading-relaxed">
            Ready to take your business to the next level? We&apos;re here to help with all your accounting and financial needs.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#00918C]/10 mb-4">
                <MapPin className="h-7 w-7 text-[#00918C]" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1F2937] mb-2">Visit Us</h3>
              <p className="text-[#374151] font-sans text-sm leading-relaxed">
                123 Business Avenue<br />
                Lahore, Pakistan
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#00918C]/10 mb-4">
                <Phone className="h-7 w-7 text-[#00918C]" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1F2937] mb-2">Call Us</h3>
              <a 
                href="tel:+923188926326" 
                className="text-[#00918C] font-sans text-sm font-medium hover:underline"
              >
                +92-318-8926326
              </a>
              <p className="text-[#374151] font-sans text-xs mt-2">Mon-Fri, 9AM-6PM</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#00918C]/10 mb-4">
                <Mail className="h-7 w-7 text-[#00918C]" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1F2937] mb-2">Email Us</h3>
              <a 
                href="mailto:connect@grgorsi.com" 
                className="text-[#00918C] font-sans text-sm font-medium hover:underline"
              >
                connect@grgorsi.com
              </a>
              <p className="text-[#374151] font-sans text-xs mt-2">We reply within 24 hours</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="mailto:connect@grgorsi.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00918C] text-white font-sans font-semibold rounded-lg hover:bg-[#00918C]/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Mail className="h-5 w-5" />
              Send us an Email
            </a>
            <a
              href="tel:+923188926326"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00918C] border-2 border-[#00918C] font-sans font-semibold rounded-lg hover:bg-[#00918C] hover:text-white transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-[#E5E7EB]">
          <div className="flex flex-col items-center">
            <p className="text-sm font-sans font-semibold text-[#1F2937] mb-4">Connect With Us</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#00918C]/10 text-[#00918C] hover:bg-[#00918C] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#00918C]/10 text-[#00918C] hover:bg-[#00918C] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
