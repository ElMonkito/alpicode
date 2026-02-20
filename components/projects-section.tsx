'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { SectionContainer } from './section-container';
import { SectionHeader } from './section-header';
import { supabase, Project } from '@/lib/supabase';

const categories = [
  { id: 'tous', label: 'Tous' },
  { id: 'e-commerce', label: 'E-commerce' },
  { id: 'vitrine', label: 'Vitrine' },
  { id: 'refonte', label: 'Refonte' },
  { id: 'landing', label: 'Landing' },
];

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState('tous');

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('order_index');

      if (data) {
        setProjects(data);
        setFilteredProjects(data);
      }
    }
    fetchProjects();
  }, []);

  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === 'tous') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === category));
    }
  };

  return (
    <SectionContainer id="projects" className="bg-white">
      <SectionHeader
        title="Nos réalisations"
        subtitle="Des projets qui illustrent notre excellence et notre savoir-faire"
      />

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            onClick={() => filterProjects(cat.id)}
            variant={activeCategory === cat.id ? 'default' : 'outline'}
            className={
              activeCategory === cat.id
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'border-gray-300 hover:border-red-600 hover:text-red-600'
            }
          >
            {cat.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                {project.project_url && (
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-white/90 hover:bg-white text-gray-900"
                  >
                    <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le projet
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <CardContent className="p-6">
              <div className="mb-2">
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
