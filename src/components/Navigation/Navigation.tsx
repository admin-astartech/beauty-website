"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "../Button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item: { name: string; href: string }) => {
    const sectionId = item.href.replace("#", "");
    const isActive = activeSection === sectionId;
    
    return (
      <a
        key={item.name}
        href={item.href}
        className={`py-2 border-b-3 transition-colors duration-200 font-medium ${
          isActive
            ? "text-primary border-b-2 border-button-primary/80"
            : "text-text-secondary border-transparent hover:border-b-2 hover:border-button-primary hover:text-primary"
        }`}
      >
        {item.name}
      </a>
    );
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 drop-shadow-lg left-0 right-0 z-50 bg-pageBg/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-[30px] font-meow-script font-bold text-black!">
              By Tia Maria Beauty
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="mx-10 flex items-baseline gap-10 md:gap-10 lg:gap-20">
              {navItems.map((item) => (
                <>
                  {renderNavItem(item)}
                </>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call</span>
            </a>
            <Button
              className="py-2! px-4!"
              href="#contact">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">Book Now</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-pageBg border-t border-border">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                      isActive
                        ? "text-primary bg-accent-light rounded-md"
                        : "text-text-secondary hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 space-y-2">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 px-3 py-2 text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href="#contact"
                  className="block mx-3 bg-button-primary text-white px-4 py-2 rounded-full hover:bg-button-hover transition-colors duration-200 text-center"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

