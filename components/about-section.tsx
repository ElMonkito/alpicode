import { SectionContainer } from './section-container';
import { SectionHeader } from './section-header';

const team = [
  {
    name: 'Alexandre Dubois',
    role: 'CEO & Lead Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  },
  {
    name: 'Sophie Laurent',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
  },
];

export function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-gradient-to-br from-blue-50 to-cyan-50">
      <SectionHeader
        title="Qui sommes-nous ?"
        subtitle="Une équipe passionnée au service de votre réussite digitale"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex gap-6 justify-center lg:justify-start">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Basée au cœur de la Suisse, <span className="font-bold text-gray-900">AlpiCode</span> incarne
            l'excellence helvétique dans le domaine du développement web. Nous créons des
            expériences digitales qui allient précision technique et design épuré.
          </p>
          <p>
            Notre mission est simple : propulser votre entreprise au sommet du digital.
            Chaque projet est traité avec le même soin et la même rigueur qu'une manufacture
            horlogère suisse traite ses créations.
          </p>
          <p className="font-semibold text-red-600">
            Performance. Élégance. Fiabilité.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
