import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { About } from "@/components/About/About";
import { Gallery } from "@/components/Gallery/Gallery";
import { Contact } from "@/components/Contact/Contact";

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

