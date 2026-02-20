'use client';

import { useEffect, useState } from 'react';
import { SectionContainer } from './section-container';
import { supabase, Partner } from '@/lib/supabase';

export function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    async function fetchPartners() {
      const { data } = await supabase
        .from('partners')
        .select('*')
        .eq('is_active', true)
        .order('order_index');

      if (data) {
        setPartners([...data, ...data]);
      }
    }
    fetchPartners();
  }, []);

  return (
    <SectionContainer className="bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Ils nous font confiance
        </h2>
        <p className="text-gray-600">Nos partenaires et clients de référence</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="flex animate-scroll-infinite hover:[animation-play-state:paused]">
          {partners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-48 h-32 mx-8 flex items-center justify-center group"
            >
              <img
                src={partner.logo_url}
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
