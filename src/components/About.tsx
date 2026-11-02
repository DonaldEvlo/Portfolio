import { Bug, Code2, Languages, ScanSearch, Smartphone, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';
import { Section } from './ui';

const pillars = [
  {
    icon: ScanSearch,
    tone: 'text-cyber',
    title: 'Threat Intel & Forensics',
    text: "Veille dark web via Tor, alertes vérifiables, collecte d'artefacts et LLM locaux.",
  },
  {
    icon: Bug,
    tone: 'text-cyber',
    title: 'Sécurité offensive',
    text: 'Pentest et audit applicatif avec Burp Suite, OWASP ZAP, Metasploit, Nmap.',
  },
  {
    icon: Smartphone,
    tone: 'text-dev',
    title: 'Mobile',
    text: 'Applications Flutter en production, détecteurs natifs Kotlin.',
  },
  {
    icon: Code2,
    tone: 'text-dev',
    title: 'Web full-stack',
    text: 'Interfaces React, API Express et FastAPI, bases SQL.',
  },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="profil"
      title={
        <>
          Construire des applications, <span className="text-gradient">et savoir les attaquer.</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-slate-400">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="card p-5">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                <Sparkles className="h-4 w-4 text-cyber" /> Qualités
              </p>
              <ul className="space-y-1.5 text-base text-slate-300">
                {profile.qualities.map((q) => (
                  <li key={q}>
                    <span className="text-cyber">→</span> {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-5">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                <Languages className="h-4 w-4 text-dev" /> Langues
              </p>
              <ul className="space-y-1.5 text-base text-slate-300">
                {profile.languages.map((l) => (
                  <li key={l.name} className="flex justify-between gap-4">
                    {l.name}
                    <span className="text-slate-500">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card p-6">
              <pillar.icon className={`mb-4 h-7 w-7 ${pillar.tone}`} />
              <h3 className="mb-2 font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
