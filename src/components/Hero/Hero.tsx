"use client";

import { Calendar, Star, ArrowRight } from "lucide-react";
import { Button, ButtonType } from "../Button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderFeature = (text: string) => {
    return (
      <div className="relative flex items-center space-x-2 text-text-secondary">
        <div className="inset-0 absolute bg-white/20! text-black blur-lg"></div>
        <Star className="h-5 w-5 text-primary fill-primary relative z-10 drop-shadow-sm" />
        <span className="font-semibold text-slate-100! relative z-10 drop-shadow-sm">{text}</span>
      </div>
    );
  };

  const renderTrustIndicator = (text: string, value: string) => {
    return (
      <div className="relative text-center flex flex-col items-center gap-3">
        <div className="inset-0 absolute bg-white/5! z-0! blur-lg"></div>
        <div className="text-5xl font-playfair font-bold text-slate-100/90! relative z-10 drop-shadow-lg">{value}</div>
        <div className="text-md font-semibold text-slate-100/90! relative z-10 drop-shadow-md">{text}</div>
      </div>
    );
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/Eyebrow_Model.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-8xl mx-auto">
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-[120px] font-meow-script font-bold text-[#584429]! mb-6 leading-tight transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="inset-0 absolute bg-white/5! z-0! blur-lg"></div>
              <span className="block text-black/70! font-playfair relative z-10 drop-shadow-lg">By
              </span>
            </div>
            <div className="relative">
              <div className="items-center gap-2 inset-0 absolute bg-white/5! z-0! blur-lg"></div>
              <span className="text-black/70! font-meow-script relative z-10 drop-shadow-lg">Tia Maria</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className={`items-center text-xl text-black font-bold md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto text-center transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="inset-0 absolute bg-white/5! text-black blur-lg"></div>
              <span className={`text-slate-100/90! relative z-10 drop-shadow-md transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>Professional brow artistry and beauty services that enhance your natural beauty with precision and care.</span>
            </div>
          </p>


          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-15 justify-center my-12 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button href="#contact">
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </Button>
            <Button
              type={ButtonType.SECONDARY}
              href="#services">
              <span>View Services</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          {/* Features */}
          <div className={`flex flex-wrap justify-center gap-15 mb-12 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {renderFeature("Expert Brow Artistry")}
            {renderFeature("Natural Results")}
            {renderFeature("Personalized Care")}
          </div>


          {/* Trust Indicators */}
          <div className={`relative mt-12 pt-8 border-t border-border/40 transition-all duration-1000 ease-out delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-text-light text-md mb-2 text-slate-100/90! font-semibold drop-shadow-sm">Trusted by clients for</p>
            <div className="flex flex-wrap justify-center gap-50 text-white!">
              {renderTrustIndicator("Happy Clients", "500+")}
              {renderTrustIndicator("Years Experience", "5+")}
              {renderTrustIndicator("Satisfaction", "100%")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

