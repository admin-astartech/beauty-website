"use client";

import { Heart, Award, Users, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-accent-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-2 text-primary">
                <Sparkles className="h-6 w-6" />
                <div className="w-16 h-px bg-primary"></div>
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-primary mb-6">
              Meet Tia Maria
            </h2>
            
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-lg">
                Welcome to By Tia Maria Beauty, where passion meets precision in the art of brow and beauty enhancement. 
                I&apos;m Tia Maria, a certified beauty specialist with over 5 years of experience in creating natural, 
                beautiful transformations.
              </p>
              
              <p>
                My journey began with a simple belief: every person deserves to feel confident and beautiful in their own skin. 
                Specializing in brow artistry, lash services, and microblading, I&apos;ve dedicated my career to mastering techniques 
                that enhance your natural features rather than masking them.
              </p>
              
              <p>
                What sets my practice apart is the personal attention I give to each client. I believe in taking the time to 
                understand your unique features, lifestyle, and beauty goals. Every service is tailored specifically to you, 
                ensuring results that look and feel authentically yours.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-3 mx-auto">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-playfair font-bold text-text-primary">5+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-3 mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-playfair font-bold text-text-primary">500+</div>
                <div className="text-sm text-text-secondary">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-3 mx-auto">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-playfair font-bold text-text-primary">100%</div>
                <div className="text-sm text-text-secondary">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-light to-accent rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center">
                {/* Placeholder for Tia Maria's photo */}
                <div className="w-64 h-64 bg-accent-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-text-secondary text-sm">Professional Photo Coming Soon</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-text-primary mb-2">
                  Tia Maria
                </h3>
                <p className="text-text-secondary mb-4">
                  Certified Beauty Specialist & Brow Artist
                </p>
                
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>✓ Certified Microblading Artist</p>
                  <p>✓ Licensed Esthetician</p>
                  <p>✓ Brow Specialist</p>
                  <p>✓ Lash Lift Certified</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-text-primary mb-6">
              My Philosophy
            </h3>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              &ldquo;Beauty isn&apos;t about perfection—it&apos;s about enhancing what makes you uniquely beautiful. 
              My goal is to help you feel confident and radiant, whether you&apos;re getting ready for a special occasion 
              or simply want to look and feel your best every day.&rdquo;
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">— Tia Maria</span>
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
