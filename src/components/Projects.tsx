import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Github, Shield, Globe, Smartphone } from 'lucide-react';
import type { Project } from '../types';

export const Projects: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'security' | 'web' | 'mobile'>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'SecureBank Dashboard',
      description: 'Interface d\'administration sécurisée pour une banque en ligne avec authentification multi-facteurs et chiffrement end-to-end.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'JWT', 'AES-256'],
      category: 'security',
      status: 'completed',
      featured: true
    },
    {
      id: '2',
      title: 'VulnScanner Pro',
      description: 'Outil de scan de vulnérabilités web automatisé avec génération de rapports détaillés et intégration CI/CD.',
      technologies: ['Python', 'FastAPI', 'React', 'Docker', 'OWASP ZAP', 'Selenium'],
      category: 'security',
      status: 'completed',
      featured: true
    },
    {
      id: '3',
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec paiements sécurisés, gestion d\'inventaire et analytics avancées.',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Redis', 'AWS'],
      category: 'web',
      status: 'completed',
      featured: false
    },
    {
      id: '4',
      title: 'CyberTraining App',
      description: 'Application mobile d\'apprentissage en cybersécurité avec simulations interactives et gamification.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js'],
      category: 'mobile',
      status: 'in-progress',
      featured: true
    }
  ];

  const categories = [
    { key: 'all', label: 'Tous', icon: Globe },
    { key: 'security', label: 'Sécurité', icon: Shield },
    { key: 'web', label: 'Web', icon: Globe },
    { key: 'mobile', label: 'Mobile', icon: Smartphone }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'security': return 'from-red-400 to-orange-400';
      case 'web': return 'from-green-400 to-teal-400';
      case 'mobile': return 'from-blue-400 to-purple-400';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'completed' ? 'text-green-400' : 'text-yellow-400';
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Projets Réalisés
            </span>
          </h2>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'border-green-400 bg-green-400/20 text-green-400'
                    : 'border-gray-600 text-gray-400 hover:border-green-400/50 hover:text-green-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 ${
                  project.featured ? 'ring-2 ring-green-400/20' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {project.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Projet Phare
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-bold ${getStatusColor(project.status)}`}>
                      {project.status === 'completed' ? 'Terminé' : 'En cours'}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)}/20 border border-current/30 rounded-full text-sm font-medium`}
                      style={{ color: `${getCategoryColor(project.category).includes('red') ? '#f87171' : getCategoryColor(project.category).includes('green') ? '#4ade80' : '#60a5fa'}` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-green-400 hover:text-cyan-400 transition-colors group/btn">
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-green-400 hover:text-cyan-400 transition-colors group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};