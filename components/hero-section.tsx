"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { Logo3D } from "@/components/logo-3d"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Quality you can trust
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground text-balance">
                at a price you can afford
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Family-owned HVAC business serving the community with top-tier craftsmanship and customer service since
              2011.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8" onClick={scrollToContact}>
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <a href="tel:9094900668">Call Us Now</a>
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Logo */}
          <div className="flex items-center justify-center">
            <Logo3D />
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => {
            const element = document.getElementById("about")
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}
