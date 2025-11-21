import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Star, DollarSign, Wind, Thermometer, Wrench, Clock } from "lucide-react"

const services = [
  {
    icon: CheckCircle,
    title: "Masters of Our Craft",
    description:
      "We guarantee proper airflow and heat transfer for a safe system you can rely on. Optimize your system's performance and enjoy an increased lifespan and reduced repairs. We stand by our work, and we're here long after installation to prove it.",
  },
  {
    icon: Shield,
    title: "Maximum Protection",
    description:
      "Our HVAC has been tested and proven against the toughest conditions. From scorching heat to winter cold fronts, we promise to safeguard your business or home through it all. Enjoy peace of mind, knowing that your assets are protected.",
  },
  {
    icon: Star,
    title: "Five-Star Service",
    description:
      "We're committed to providing a premier service experience. Our success is built on the satisfaction of our customers. We understand the importance of trust and communication, and we prioritize the customer every step of the way.",
  },
  {
    icon: DollarSign,
    title: "Unbeatable Prices",
    description:
      "We bridge the gap between quality and price. We value transparency and integrity, so you can be sure all of our costs are up-front and there aren't any hidden fees. Always on time and on budget, you won't have to worry about any surprises.",
  },
]

const hvacServices = [
  {
    icon: Wind,
    title: "Air Conditioning",
    image: "/air-conditioning.jpg", // Added realistic HVAC images for each service
  },
  {
    icon: Thermometer,
    title: "Heating Systems",
    image: "/heating-systems.jpg",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    image: "/repairs-maintenance.jpg",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    image: "/emergency-service.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HVAC solutions tailored to your needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* HVAC Services Grid */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">Our HVAC Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hvacServices.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
