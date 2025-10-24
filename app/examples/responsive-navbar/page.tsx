import Navbar from "@/components/navbar"

export default function ResponsiveNavbarExample() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <Navbar />
      <div className="h-20" />
      <div className="max-w-7xl mx-auto py-12 space-y-8">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to Our Accounting Firm
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scroll down to see the navbar animation
            </p>
          </div>
        </section>

        {[
          "About",
          "Services",
          "Team",
          "Why Us",
          "Contact",
        ].map((item) => (
          <section
            key={item}
            id={item.toLowerCase().replace(/\s+/g, "-")}
            className="min-h-screen flex items-center justify-center bg-accent/20 rounded-lg"
          >
            <div className="text-center p-8">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {item}
              </h2>
              <p className="text-lg text-muted-foreground">
                This is the {item} section. Keep scrolling to see more content.
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}


