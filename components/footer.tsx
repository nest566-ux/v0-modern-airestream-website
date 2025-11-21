import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold">AIR STREAM</div>
              <div className="text-lg font-semibold text-muted-foreground">MECHANICAL</div>
            </div>
            <p className="text-sm opacity-90">Quality HVAC solutions you can trust since 2011</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:9094900668" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                (909) 490-0668
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Service Area</h3>
            <p className="text-sm opacity-90">Proudly serving Southern California and surrounding areas</p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Air Stream Mechanical, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
