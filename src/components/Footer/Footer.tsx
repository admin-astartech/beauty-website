"use client";

import { Instagram, Facebook, Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              By Tia Maria Beauty
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Professional brow artistry and beauty services that enhance your natural beauty 
              with precision, care, and personalized attention.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/bytiamariabeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/bytiamariabeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">hello@bytiamariabeauty.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-gray-300">
                  123 Beauty Lane<br />
                  Your City, ST 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4">Business Hours</h4>
              <div className="space-y-1 text-gray-300">
                <p>Tuesday - Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday - Monday: Closed</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4">Services</h4>
              <div className="space-y-1 text-gray-300">
                <p>Brow Shaping & Tinting</p>
                <p>Brow Lamination</p>
                <p>Lash Lifting & Tinting</p>
                <p>Microblading</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 By Tia Maria Beauty. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary" />
            <span>for beautiful brows</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
