import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Skill } from '../types';

export const Skills: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);

  const skills: Skill[] = [
    { name: 'React/TypeScript', level: 95, category: 'frontend' },
    { name: 'Node.js/Express', level: 90, category: 'backend' },
    { name: 'Python/Django', level: 85, category: 'backend' },
    { name: 'Penetration Testing', level: 92, category: 'security' },
    { name: 'OWASP Top 10', level: 98, category: 'security' },
    { name: 'Burp Suite', level: 88, category: 'security' },
    { name: 'Metasploit', level: 85, category: 'security' },
    { name: 'Docker/Kubernetes', level: 87, category: 'tools' },
    { name: 'AWS/Azure', level: 82, category: 'tools' },
    { name: 'Git/DevOps', level: 90, category: 'tools' }
  ];

  const categories = {
    frontend: { name: 'Frontend', color: 'from-blue-400 to-purple-400' },
    backend: { name: 'Backend', color: 'from-green-400 to-teal-400' },
    security: { name: 'Cybersécurité', color: 'from-red-400 to-orange-400' },
    tools: { name: 'Outils & DevOps', color: 'from-yellow-400 to-orange-400' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Compétences & Expertise
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${categories[category as keyof typeof categories].color} bg-clip-text text-transparent`}>
                  {categories[category as keyof typeof categories].name}
                </h3>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium group-hover:text-green-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${categories[skill.category].color} transition-all duration-1000 ease-out transform origin-left`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Certifications & Formations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  'OSCP - Offensive Security',
                  'CEH - EC-Council',
                  'AWS Solutions Architect',
                  'CISSP Associate'
                ].map((cert, index) => (
                  <div key={index} className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-green-400 font-medium text-sm">{cert}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};