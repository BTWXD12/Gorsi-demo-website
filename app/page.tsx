import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Team from "@/components/team"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import StickyMobileCTA from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="pt-20 md:pt-16 bg-gradient-to-b from-white via-[#f0f5fb] to-white">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Team />
      <ContactUs />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
