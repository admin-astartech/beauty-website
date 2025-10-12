"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Brow Shaping & Tinting",
    description: "Natural brow enhancement with precision shaping"
  },
  {
    id: 2,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Brow Lamination",
    description: "Transformed unruly brows into perfectly groomed arches"
  },
  {
    id: 3,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Lash Lifting & Tinting",
    description: "Enhanced natural lashes for a wide-eyed look"
  },
  {
    id: 4,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Microblading",
    description: "Semi-permanent brow enhancement with natural hair strokes"
  },
  {
    id: 5,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Brow Shaping & Tinting",
    description: "Perfect arch definition and natural color enhancement"
  },
  {
    id: 6,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Brow Lamination",
    description: "Lifted and styled brows for everyday elegance"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-pageBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-primary">
              <Sparkles className="h-6 w-6" />
              <div className="w-16 h-px bg-primary"></div>
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-primary mb-6">
            Transformation Gallery
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See the beautiful transformations we create for our clients. Every result is tailored to enhance natural beauty.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2">
                    {/* Before */}
                    <div className="relative">
                      <div className="aspect-[3/4] bg-accent-light flex items-center justify-center">
                        <div className="text-center">
                          <Eye className="h-12 w-12 text-primary mx-auto mb-2" />
                          <p className="text-sm text-text-secondary font-medium">Before</p>
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Before
                      </div>
                    </div>
                    
                    {/* After */}
                    <div className="relative">
                      <div className="aspect-[3/4] bg-primary-light flex items-center justify-center">
                        <div className="text-center">
                          <Sparkles className="h-12 w-12 text-white mx-auto mb-2" />
                          <p className="text-sm text-white font-medium">After</p>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        After
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-3">
                        <Eye className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-playfair font-bold text-text-primary mb-2">
                    {image.service}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-accent-light rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-text-secondary mb-6">
              Book your consultation today and discover how we can enhance your natural beauty.
            </p>
            <a
              href="#contact"
              className="bg-button-primary text-white px-8 py-3 rounded-full hover:bg-button-hover transition-colors duration-200 font-medium"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                ×
              </div>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors duration-200"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors duration-200"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="aspect-[3/4] bg-accent-light flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-text-secondary font-medium">Before</p>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-primary-light flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-16 w-16 text-white mx-auto mb-4" />
                    <p className="text-white font-medium">After</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-text-primary mb-2">
                  {galleryImages[selectedImage].service}
                </h3>
                <p className="text-text-secondary">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

