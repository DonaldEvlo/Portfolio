import type { ReactNode, SVGProps } from 'react';
import { useReveal } from '../hooks/useReveal';

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
}

export function Section({ id, index, label, title, intro, children }: SectionProps) {
  const [ref, isVisible] = useReveal();

  return (
    <section id={id} className="relative py-24 md:py-32">
      <div ref={ref} data-visible={isVisible} className="reveal mx-auto max-w-6xl px-5 md:px-8">
        <header className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-cyber">
            <span className="text-slate-500">{index}.</span> {label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-slate-400">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'cyber' | 'dev' | 'neutral' }) {
  const tones = {
    cyber: 'border-cyber/25 bg-cyber/5 text-cyber',
    dev: 'border-dev/25 bg-dev/5 text-dev',
    neutral: 'border-white/10 bg-white/[0.03] text-slate-300',
  };

  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
}

/** Lucide ne fournit plus les logos de marques depuis la v1. */
export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
