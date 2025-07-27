import { ChevronDown, Code, Shield, Terminal } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Développeur Full-Stack',
    'Expert en Cybersécurité',
    'Pentester Certifié',
    'Architecte Sécurisé',
    'Passionné de Web3',
    
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 inline-block">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Terminal className="w-12 h-12 text-green-400 animate-bounce" />
            <Code className="w-12 h-12 text-cyan-400 animate-pulse" />
            <Shield className="w-12 h-12 text-red-400 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Donald William Kodjo EVLO
          </span>
        </h1>

        <div className="h-20 mb-8">
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-2">
            <span className="text-green-400 font-mono">{'> '}</span>
            <span className="text-white">{typedText}</span>
            <span className="animate-blink text-green-400">|</span>
          </h2>
        </div>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionné par la création d'applications sécurisées et performantes, 
          je combine développement moderne et expertise en cybersécurité pour 
          protéger le web de demain.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={scrollToAbout}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <span className="relative z-10">Découvrir mon profil</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50">
            Télécharger CV
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-green-400 cursor-pointer hover:text-cyan-400 transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-glitch"></div>
      </div>
    </section>
  );
};