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
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="04"
      label="projets"
      title="Ce que j'ai construit."
      intro="Des outils de sécurité qui s'appuient sur l'IA, et des applications web et mobiles développées de bout en bout."
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
