import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Building, Calendar, MapPin } from 'lucide-react';
import type { Experience } from '../types';

export const Experience: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);

  const experiences: Experience[] = [
    {
      id: '1',
      company: 'CyberTech Solutions',
      position: 'Senior Security Engineer',
      period: '2022 - Présent',
      description: [
        'Direction d\'une équipe de 5 développeurs pour des projets de sécurité critiques',
        'Mise en place d\'architectures sécurisées pour des applications bancaires',
        'Réalisation de tests d\'intrusion et audits de sécurité pour des clients Fortune 500'
      ],
      technologies: ['Python', 'React', 'AWS', 'Kubernetes', 'Burp Suite', 'Metasploit']
    },
    {
      id: '2',
      company: 'SecureCode Inc.',
      position: 'Développeur Full-Stack & Pentester',
      period: '2020 - 2022',
      description: [
        'Développement d\'applications web sécurisées avec React et Node.js',
        'Intégration de pratiques DevSecOps dans les pipelines CI/CD',
        'Formation des équipes aux bonnes pratiques de sécurité'
      ],
      technologies: ['TypeScript', 'Node.js', 'Docker', 'OWASP', 'Jenkins', 'Nmap']
    },
    {
      id: '3',
      company: 'WebDev Agency',
      position: 'Développeur Frontend Senior',
      period: '2018 - 2020',
      description: [
        'Création d\'interfaces utilisateur modernes et performantes',
        'Optimisation des performances et de l\'accessibilité',
        'Mentor pour les développeurs juniors'
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Jest', 'Cypress']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Expérience Professionnelle
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-cyan-400"></div>

              {experiences.map((exp, index) => (
                <div key={exp.id} className={`relative mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse"></div>
                  
                  <div className="ml-20">
                    <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex items-center text-green-400 mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2 mt-2">▶</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full text-sm text-green-400 hover:border-cyan-400/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};