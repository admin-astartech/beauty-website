"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import { Button } from "../Button";

const galleryImages = [
  {
    id: 1,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Brow Shaping",
    description: "Natural brow arch with precision shaping",
    overlay: "/Brow_Shaping.jpg"
  },
  {
    id: 2,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Lash Lifting",
    description: "Transformed unruly lashes into perfectly curled and lifted lashes",
    overlay: "/Lash_Lifting.png"
  },
  {
    id: 3,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Lash Tinting",
    description: "Natural lash enhancement",
    overlay: "/Lash_Tinting.png"
  },
  {
    id: 4,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Microblading",
    description: "Semi-permanent brow enhancement with natural hair strokes",
    overlay: "/Microblading.jpg"
  },
  {
    id: 5,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Brow Tinting",
    description: "Natural brow enhancement",
    overlay: "/Brow_Tinting_V2.png"
  },
  {
    id: 6,
    before: "/api/placeholder/300/400",
    after: "/api/placeholder/300/400",
    service: "Brow Lamination",
    description: "Lifted and styled brows for everyday elegance",
    overlay: "/Brow_Lamination.png"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleElements(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe section header
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe gallery cards
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe CTA section
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        <div 
          ref={sectionRef}
          data-index="0"
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            visibleElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-primary">
              <Sparkles className="h-6 w-6" />
              <div className="w-16 h-px bg-primary"></div>
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-meow-script font-bold text-text-primary mb-6">
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
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-index={index + 1}
              className={`group cursor-pointer transition-all duration-500 ease-out ${
                visibleElements.has(index + 1) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visibleElements.has(index + 1) ? `${index * 150}ms` : '0ms'
              }}
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
                  <div 
                    className="absolute inset-0 transition-all duration-300 flex items-center justify-center bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image.overlay})` }}
                  >
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
        <div 
          ref={ctaRef}
          data-index="7"
          className={`text-center mt-16 transition-all duration-1000 ease-out delay-300 ${
            visibleElements.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-accent-light drop-shadow-xl! shadow-sm! rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-text-secondary mb-6">
              Book your consultation today and discover how we can enhance your natural beauty.
            </p>
            <Button href="#contact">
              Book Your Consultation
            </Button>
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

