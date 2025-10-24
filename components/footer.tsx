import { Linkedin, Facebook, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1F2937] text-[#E5E7EB] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#374151]">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-serif font-bold text-white mb-1">G. R. Gorsi & Co.</h3>
            <p className="text-xs font-sans text-[#9CA3AF]">Professional Financial Services</p>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-sans">
            <a href="tel:+923188926326" className="flex items-center gap-2 hover:text-[#00918C] transition-colors">
              <Phone className="h-4 w-4" />
              <span>+92-318-8926326</span>
            </a>
            <a href="mailto:connect@grgorsi.com" className="flex items-center gap-2 hover:text-[#00918C] transition-colors">
              <Mail className="h-4 w-4" />
              <span>connect@grgorsi.com</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#374151] hover:bg-[#00918C] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#374151] hover:bg-[#00918C] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm font-sans text-[#9CA3AF]">
          <p>&copy; {currentYear} G. R. Gorsi & Co. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="hover:text-[#00918C] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#4B5563]">•</span>
            <a href="#" className="hover:text-[#00918C] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
