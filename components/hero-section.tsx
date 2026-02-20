'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
          alt="Swiss Alps"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Votre présence digitale,
          <br />
          <span className="text-red-600">au sommet.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Création de sites web premium. Précision suisse. Excellence digitale.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          Obtenir un devis
        </Button>
      </div>

      <button
        onClick={() => {
          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
