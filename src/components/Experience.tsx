import { MapPin } from 'lucide-react';
import { experiences } from '../data/profile';
import { Section, Tag } from './ui';

export function Experience() {
  return (
    <Section id="experience" index="03" label="expérience" title="Expérience professionnelle">
      <ol className="relative max-w-3xl space-y-8 border-l border-white/10 pl-8">
        {experiences.map((exp) => (
          <li key={exp.id} className="relative">
            <span className="absolute -left-[37px] top-6 h-3 w-3 rounded-full border-2 border-ink bg-cyber ring-4 ring-cyber/15" />
            <article className="card p-6">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                <span className="font-mono text-xs text-slate-500">{exp.period}</span>
              </div>
              <p className="mb-4 flex flex-wrap items-center gap-x-3 text-sm">
                <span className="font-medium text-cyber">{exp.company}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{exp.type}</span>
                <span className="inline-flex items-center gap-1 text-slate-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {exp.location}
                </span>
              </p>
              <ul className="mb-5 space-y-2 text-slate-400">
                {exp.description.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 font-mono text-cyber">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
