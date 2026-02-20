'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { SectionContainer } from './section-container';
import { SectionHeader } from './section-header';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'CHF 2\'500',
    description: 'Parfait pour lancer votre présence en ligne',
    features: [
      'Site vitrine 5 pages',
      'Design responsive',
      'Optimisation SEO de base',
      'Formulaire de contact',
      'Support 30 jours',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: 'CHF 5\'900',
    description: 'La solution complète pour votre entreprise',
    features: [
      'Site vitrine ou e-commerce',
      'Design sur mesure premium',
      'SEO avancé et analytics',
      'CMS intégré',
      'Animations personnalisées',
      'Support 90 jours',
      'Formation incluse',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 'Sur mesure',
    description: 'Excellence et performance maximale',
    features: [
      'Plateforme web complexe',
      'Design & développement sur mesure',
      'Intégrations avancées',
      'Performance optimale',
      'Sécurité renforcée',
      'Support illimité 1 an',
      'Maintenance continue',
    ],
    popular: false,
  },
];

export function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionContainer id="pricing" className="bg-white">
      <SectionHeader
        title="Tarifs transparents"
        subtitle="Choisissez la formule adaptée à votre projet et votre ambition"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              plan.popular
                ? 'border-red-600 border-2 shadow-xl scale-105'
                : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 hover:bg-red-700">
                Populaire
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                onClick={scrollToContact}
                className={`w-full ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                Choisir {plan.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
