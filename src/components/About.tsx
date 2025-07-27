import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { User, Brain, Target, Zap, Terminal, Shield, Code } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.3);

  const stats = [
    { icon: User, label: 'Années d\'expérience', value: '7+' },
    { icon: Brain, label: 'Projets réalisés', value: '50+' },
    { icon: Target, label: 'Vulnérabilités découvertes', value: '200+' },
    { icon: Zap, label: 'Certifications', value: '12' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              À propos de moi
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl transform rotate-3 animate-pulse"></div>
              <div className="relative bg-black/40 backdrop-blur-md border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Terminal className="w-6 h-6 text-green-400 mr-3" />
                  Mon parcours
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Développeur passionné depuis plus de 7 ans, j'ai évolué naturellement vers la cybersécurité 
                  en découvrant l'importance cruciale de la sécurité dans le développement moderne.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Spécialisé dans les tests d'intrusion, l'analyse de vulnérabilités et le développement sécurisé, 
                  je combine expertise technique et vision stratégique pour créer des solutions robustes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Ma mission : protéger les applications et infrastructures contre les menaces émergentes 
                  tout en maintenant une expérience utilisateur optimale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <stat.icon className="w-12 h-12 text-green-400 mx-auto mb-3 group-hover:text-cyan-400 transition-colors animate-pulse" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-green-500/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Philosophie de travail
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Sécurité par conception</h4>
                <p className="text-gray-400 text-sm">Intégrer la sécurité dès les premières phases de développement</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Code propre</h4>
                <p className="text-gray-400 text-sm">Maintenir des standards élevés de qualité et de lisibilité</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Innovation continue</h4>
                <p className="text-gray-400 text-sm">Se tenir à jour des dernières technologies et menaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};