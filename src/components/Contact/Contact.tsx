"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button, ButtonType } from "../Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const services = [
    "Brow Shaping & Tinting",
    "Brow Lamination",
    "Lash Lifting & Tinting",
    "Microblading",
    "Consultation"
  ];

  return (
    <section id="contact" className="py-20 bg-accent-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-meow-script font-bold text-text-primary mb-6">
            Book Your Appointment
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to enhance your natural beauty? Get in touch to schedule your consultation or appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-text-primary mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Phone</h4>
                  <p className="text-text-secondary">(555) 123-4567</p>
                  <p className="text-sm text-text-light">Call or text for appointments</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                  <p className="text-text-secondary">hello@bytiamariabeauty.com</p>
                  <p className="text-sm text-text-light">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Location</h4>
                  <p className="text-text-secondary">123 Beauty Lane<br />Your City, ST 12345</p>
                  <p className="text-sm text-text-light">Private studio by appointment only</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Hours</h4>
                  <div className="text-text-secondary space-y-1">
                    <p>Tuesday - Friday: 10:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday - Monday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Booking */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-playfair font-bold text-text-primary mb-4">
                Quick Booking
              </h4>
              <p className="text-text-secondary mb-6">
                Prefer to call? We&apos;re here to help you find the perfect appointment time.
              </p>
              <Button
              type={ButtonType.SECONDARY}
              className="flex gap-2 drop-shadow-sm! shadow-sm!"
              href="tel:+1234567890">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit as unknown as React.FormEventHandler<HTMLFormElement>} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your beauty goals or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type={ButtonType.PRIMARY}
                  className="w-full flex gap-2 drop-shadow-sm!"
                  onClick={handleSubmit}>
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>

              <p className="text-sm text-text-light mt-4 text-center">
                We&apos;ll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
