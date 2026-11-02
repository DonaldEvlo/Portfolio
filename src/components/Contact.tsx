import { Check, Copy, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon, Section } from './ui';

const channels = [
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Donald William Kodjo EVLO', href: profile.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github },
  { icon: MapPin, label: 'Localisation', value: profile.location },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" index="05" label="contact" title="Travaillons ensemble.">
      <div className="card relative overflow-hidden p-8 md:p-12">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyber/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-400">
              Une opportunité en cybersécurité, un audit, ou un projet web ou mobile à développer ? Écrivez-moi, je
              réponds rapidement.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyber to-dev px-6 py-3 font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                <Mail className="h-5 w-5" />
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm text-slate-300 transition-colors hover:border-cyber/50 hover:text-white"
                aria-live="polite"
              >
                {copied ? <Check className="h-4 w-4 text-cyber" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copié !' : "Copier l'adresse"}
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {channels.map((channel) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    <channel.icon className="h-5 w-5 text-cyber" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">{channel.label}</span>
                    <span className="block text-slate-200">{channel.value}</span>
                  </span>
                </>
              );

              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/[0.03]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-2">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
