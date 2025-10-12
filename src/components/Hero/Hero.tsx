"use client";

import { Calendar, Star, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pageBg to-accent-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-primary">
              <Sparkles className="h-6 w-6" />
              <div className="w-16 h-px bg-primary"></div>
              <Sparkles className="h-6 w-6" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-text-primary mb-6 leading-tight">
            By Tia Maria
            <span className="block text-primary">Beauty</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional brow artistry and beauty services that enhance your natural beauty with precision and care.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-text-secondary">
              <Star className="h-5 w-5 text-primary" />
              <span className="font-medium">Expert Brow Artistry</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Star className="h-5 w-5 text-primary" />
              <span className="font-medium">Natural Results</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Star className="h-5 w-5 text-primary" />
              <span className="font-medium">Personalized Care</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-button-primary text-white px-8 py-4 rounded-full hover:bg-button-hover transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg font-medium shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </a>
            <a
              href="#services"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 text-lg font-medium"
            >
              <span>View Services</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-text-light text-sm mb-4">Trusted by clients for</p>
            <div className="flex flex-wrap justify-center gap-8 text-text-secondary">
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-primary">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-primary">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-primary">100%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

