import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './ui';

const links = [
  { id: 'about', label: 'Profil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'border-b border-white/8 bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="group font-mono text-sm text-slate-300" onClick={() => setIsOpen(false)}>
          <span className="text-cyber">~/</span>
          <span className="transition-colors group-hover:text-white">{profile.handle}</span>
          <span className="animate-blink text-dev">_</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {links.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <span className="font-mono text-xs text-cyber/70">0{i + 1}.</span> {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ml-2 p-2 text-slate-400 transition-colors hover:text-white"
            aria-label="Profil GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 transition-colors hover:text-white"
            aria-label="Profil LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.cv}
            download
            className="ml-2 inline-flex items-center gap-2 rounded-md border border-cyber/40 px-4 py-2 font-mono text-xs text-cyber transition-colors hover:bg-cyber/10"
          >
            <Download className="h-4 w-4" />
            CV
          </a>
        </nav>

        <button
          type="button"
          className="text-slate-300 hover:text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/8 px-5 pb-6 pt-2 md:hidden" aria-label="Navigation mobile">
          {links.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-slate-300 hover:text-white"
            >
              <span className="font-mono text-xs text-cyber">0{i + 1}.</span> {link.label}
            </a>
          ))}
          <a href={profile.cv} download className="mt-2 flex items-center gap-2 py-3 font-mono text-sm text-cyber">
            <Download className="h-4 w-4" />
            Télécharger le CV
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-3 font-mono text-sm text-slate-300"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-3 font-mono text-sm text-slate-300"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </nav>
      )}
    </header>
  );
}
