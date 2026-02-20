'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { SectionContainer } from './section-container';
import { SectionHeader } from './section-header';
import { supabase, Testimonial } from '@/lib/supabase';

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (data) {
        setTestimonials(data);
      }
    }
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) return null;

  return (
    <SectionContainer className="bg-gray-900 text-white">
      <SectionHeader
        title="Ce que disent nos clients"
        subtitle="La satisfaction client au cœur de notre démarche"
        className="text-white [&_h2]:text-white [&_p]:text-gray-300"
      />

      <div className="max-w-4xl mx-auto">
        <Card className="bg-gray-800 border-gray-700 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[activeIndex]?.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-100 text-center mb-8 italic leading-relaxed">
              "{testimonials[activeIndex]?.content}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              {testimonials[activeIndex]?.avatar_url && (
                <img
                  src={testimonials[activeIndex].avatar_url}
                  alt={testimonials[activeIndex].client_name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-700"
                />
              )}
              <div className="text-left">
                <div className="font-bold text-lg text-white">
                  {testimonials[activeIndex]?.client_name}
                </div>
                <div className="text-gray-400">
                  {testimonials[activeIndex]?.client_role}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-red-600 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
