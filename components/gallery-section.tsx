"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/2015-09-25-14.50.38-1.jpg",
    alt: "HVAC Installation 1",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/2015-09-25-14.51.06-1.jpg",
    alt: "HVAC Installation 2",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/2014-11-20-15.58.10-2.jpg",
    alt: "HVAC System 3",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/img_3737-2.jpg",
    alt: "HVAC Installation 4",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/img_3733-1.jpg",
    alt: "HVAC System 5",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/img_3739-1.jpg",
    alt: "HVAC Installation 6",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/img_3735-1-e1656041644176.jpg",
    alt: "HVAC System 7",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/img_3743-1.jpg",
    alt: "HVAC Installation 8",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/img_3730-1.jpg",
    alt: "HVAC System 9",
  },
  {
    src: "https://airestream.net/wp-content/uploads/2022/06/2011-12-19_13-38-03_594-1.jpg",
    alt: "HVAC Installation 10",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Work</h2>
          <p className="text-xl text-muted-foreground">See the quality of our installations and craftsmanship</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  )
}
