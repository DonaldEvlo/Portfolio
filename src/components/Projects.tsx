import { ExternalLink, FolderGit2, Monitor, Shield, Smartphone, Globe } from 'lucide-react';
import { useState } from 'react';
import { profile, projects } from '../data/profile';
import type { Project, ProjectCategory } from '../types';
import { GithubIcon, Section, Tag } from './ui';

type Filter = 'all' | ProjectCategory;

const filters: { key: Filter; label: string; icon: typeof Shield }[] = [
  { key: 'all', label: 'Tous', icon: FolderGit2 },
  { key: 'security', label: 'Sécurité', icon: Shield },
  { key: 'web', label: 'Web', icon: Globe },
  { key: 'mobile', label: 'Mobile', icon: Smartphone },
  { key: 'desktop', label: 'Desktop', icon: Monitor },
];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-4">
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 transition-colors hover:text-white"
          aria-label={`Code source de ${project.title}`}
        >
          <GithubIcon className="h-5 w-5" />
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 transition-colors hover:text-white"
          aria-label={`Démo en ligne de ${project.title}`}
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const isSecurity = project.categories.includes('security');

  return (
    <article className="card group relative flex flex-col overflow-hidden p-7">
      <div
        className={`absolute inset-x-0 top-0 h-px bg-linear-to-r ${isSecurity ? 'from-cyber' : 'from-dev'} to-transparent`}
      />
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className={`mb-2 font-mono text-xs ${isSecurity ? 'text-cyber' : 'text-dev'}`}>
            {project.subtitle}
            {project.note && <span className="text-slate-500"> · {project.note}</span>}
          </p>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
        <ProjectLinks project={project} />
      </div>

      <p className="mb-5 leading-relaxed text-slate-400">{project.description}</p>

      <ul className="mb-6 space-y-2 text-sm text-slate-300">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className={`font-mono ${isSecurity ? 'text-cyber' : 'text-dev'}`}>▹</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech} tone={isSecurity ? 'cyber' : 'dev'}>
            {tech}
          </Tag>
        ))}
      </div>
    </article>
  );
}

function FlagshipProject({ project }: { project: Project }) {
  return (
    <article className="card group relative mb-6 grid overflow-hidden lg:grid-cols-[1fr_1.15fr]">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-cyber via-dev to-transparent" />
      <div className="flex flex-col p-7 lg:p-9">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyber/30 bg-cyber/10 px-3 py-1 font-mono text-xs text-cyber">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyber" />
              projet phare
            </p>
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <p className="mt-1 font-mono text-sm text-cyber">{project.subtitle}</p>
          </div>
          <ProjectLinks project={project} />
        </div>

        <p className="mb-5 leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mb-6 space-y-2 text-sm text-slate-300">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="font-mono text-cyber">▹</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech} tone="cyber">
              {tech}
            </Tag>
          ))}
        </div>
      </div>

      {project.image && (
        <a
          href={project.repo ?? project.demo}
          target="_blank"
          rel="noreferrer"
          className="relative block border-t border-white/8 bg-ink/60 p-4 lg:border-l lg:border-t-0 lg:p-6"
          aria-label={`Voir ${project.title} sur GitHub`}
        >
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={`Capture d'écran de ${project.title}`}
            width={1600}
            height={1000}
            loading="lazy"
            className="h-full w-full rounded-lg border border-white/10 object-cover object-top-left shadow-2xl shadow-cyber/5 transition-transform duration-500 group-hover:scale-[1.015]"
          />
        </a>
      )}
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex flex-col p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <FolderGit2 className="h-7 w-7 text-dev" />
        <ProjectLinks project={project} />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-white">{project.title}</h3>
      <p className="mb-3 font-mono text-xs text-slate-500">{project.subtitle}</p>
      <p className="mb-5 text-sm leading-relaxed text-slate-400">{project.description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter));
  const flagship = visible.filter((p) => p.flagship);
  const featured = visible.filter((p) => p.featured && !p.flagship);
  const others = visible.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="04"
      label="projets"
      title="Ce que j'ai construit."
      intro="De la threat intelligence et des outils de sécurité qui s'appuient sur l'IA, et des applications web et mobiles développées de bout en bout."
    >
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === f.key
                ? 'border-cyber/50 bg-cyber/10 text-cyber'
                : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-white'
            }`}
          >
            <f.icon className="h-4 w-4" />
            {f.label}
          </button>
        ))}
      </div>

      {flagship.map((project) => (
        <FlagshipProject key={project.id} project={project} />
      ))}

      {featured.length > 0 && (
        <div className="mb-6 grid gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>
      )}

      {others.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <p className="mt-12 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 transition-colors hover:text-cyber"
        >
          <GithubIcon className="h-4 w-4" />
          Tous mes dépôts sur GitHub →
        </a>
      </p>
    </Section>
  );
}
