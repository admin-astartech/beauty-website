"use client";

import { Eye, Scissors, Sparkles, Clock } from "lucide-react";
import { Button } from "../Button";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Eye,
    title: "Brow Shaping & Tinting",
    description: "Professional brow shaping and tinting to enhance your natural arch and create the perfect frame for your eyes.",
    duration: "45 min",
    price: "$65",
    features: ["Precision shaping", "Natural tinting", "Brow consultation", "Aftercare guidance"]
  },
  {
    icon: Scissors,
    title: "Brow Lamination",
    description: "Transform unruly brows into perfectly groomed, lifted brows that stay in place all day long.",
    duration: "60 min",
    price: "$85",
    features: ["Brow lifting", "Long-lasting results", "Natural look", "Up to 6 weeks"]
  },
  {
    icon: Sparkles,
    title: "Lash Lifting & Tinting",
    description: "Enhance your natural lashes with a gentle lift and tint for a wide-eyed, refreshed appearance.",
    duration: "75 min",
    price: "$95",
    features: ["Lash curling", "Natural tinting", "No extensions needed", "4-6 week results"]
  },
  {
    icon: Eye,
    title: "Brow Microblading",
    description: "Semi-permanent brow tattooing technique that creates natural-looking hair strokes for fuller brows.",
    duration: "120 min",
    price: "$350",
    features: ["Semi-permanent", "Natural hair strokes", "Consultation included", "Touch-up included"]
  }
];

export function Services() {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Observe service cards
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-pageBg">
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
            Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Professional beauty services designed to enhance your natural features and boost your confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-index={index + 1}
              className={`cursor-pointer bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-border ${
                visibleElements.has(index + 1) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visibleElements.has(index + 1) ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="flex items-center gap-4">
                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-accent-light rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Service Info */}
                <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
                  {service.title}
                </h3>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Service Details */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{service.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <span className="text-3xl font-bold">{service.price}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                  What&apos;s Included
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-w-60 mx-auto">
                {/* CTA Button */}
                <Button href="#contact">
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          ref={(el) => {
            cardRefs.current[4] = el;
          }}
          data-index="5"
          className={`mt-16 text-center transition-all duration-1000 ease-out delay-300 ${
            visibleElements.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-accent-light rounded-2xl drop-shadow-xl! shadow-sm! p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
              Why Choose By Tia Maria Beauty?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-playfair font-bold text-primary mb-2">5+</div>
                <div className="text-text-secondary">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-primary mb-2">500+</div>
                <div className="text-text-secondary">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-primary mb-2">100%</div>
                <div className="text-text-secondary">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
