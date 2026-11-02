import { ArrowDown, Download, MapPin } from 'lucide-react';
import { profile, projects } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';
import { GithubIcon, LinkedinIcon } from './ui';

const prompt = `${profile.handle}@kali:~$`;

const terminal: { cmd: string; out: string[] }[] = [
  { cmd: 'whoami', out: [`${profile.firstName} ${profile.lastName}`] },
  { cmd: 'cat focus.txt', out: ['threat intel · forensics · IA', 'développement web & mobile'] },
  {
    cmd: 'ls ~/projets',
    out: [projects.filter((p) => p.repo).map((p) => `${p.id}/`).join('  ')],
  },
];

export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative flex min-h-svh items-center pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-cyber" />
            {profile.location}
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {profile.firstName}
            <br />
            <span className="text-gradient">{profile.lastName}</span>
          </h1>

          <p className="mt-6 h-8 font-mono text-lg text-slate-300 md:text-xl" aria-label={profile.roles.join(', ')}>
            <span className="text-cyber" aria-hidden="true">
              &gt;{' '}
            </span>
            <span aria-hidden="true">{role}</span>
            <span className="animate-blink text-dev" aria-hidden="true">
              ▍
            </span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{profile.summary}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-linear-to-r from-cyber to-dev px-6 py-3 font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Voir mes projets
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-cyber/50 hover:bg-cyber/5"
            >
              <Download className="h-4 w-4" />
              Télécharger le CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 text-slate-400 transition-colors hover:text-white"
              aria-label="Profil GitHub"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="-ml-3 p-3 text-slate-400 transition-colors hover:text-white"
              aria-label="Profil LinkedIn"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="card overflow-hidden shadow-2xl shadow-cyber/5">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-cyber/80" />
            <span className="ml-3 font-mono text-xs text-slate-500">zsh — {profile.handle}@kali</span>
          </div>
          <div className="space-y-4 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
            {terminal.map((entry, i) => (
              <div key={entry.cmd} className="animate-line-in" style={{ animationDelay: `${300 + i * 450}ms` }}>
                <p>
                  <span className="text-cyber">{prompt}</span> <span className="text-white">{entry.cmd}</span>
                </p>
                {entry.out.map((line) => (
                  <p key={line} className="wrap-break-word text-slate-400">
                    {line}
                  </p>
                ))}
              </div>
            ))}
            <p className="animate-line-in" style={{ animationDelay: `${300 + terminal.length * 450}ms` }}>
              <span className="text-cyber">{prompt}</span> <span className="animate-blink text-dev">▍</span>
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 transition-colors hover:text-cyber md:block"
        aria-label="Défiler vers le profil"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
