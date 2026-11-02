import { Globe, Mail, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';
import { GithubIcon, LinkedinIcon } from '../components/ui';
import { education, experiences, profile, projects, skillGroups } from '../data/profile';

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-[3mm] flex items-center gap-[2mm] font-mono text-[8.5pt] font-bold uppercase tracking-[0.12em] text-ink">
      <span className="h-[1.6mm] w-[1.6mm] rounded-full bg-cyber-print" />
      {children}
    </h2>
  );
}

function SideHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-[2.5mm] font-mono text-[8pt] font-bold uppercase tracking-[0.12em] text-cyber-print">
      {children}
    </h2>
  );
}

/** Le CV tient sur une page : seuls les premiers projets phares sont détaillés. */
const DETAILED_PROJECTS = 3;
const MAX_TECH = 8;

export function Cv() {
  const showcased = projects.filter((project) => project.featured);
  const detailed = showcased.slice(0, DETAILED_PROJECTS);
  const others = [...showcased.slice(DETAILED_PROJECTS), ...projects.filter((project) => !project.featured)];

  const contacts = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: LinkedinIcon, label: 'in/donald-william-kodjo-evlo', href: profile.linkedin },
    { icon: GithubIcon, label: stripProtocol(profile.github), href: profile.github },
    { icon: Globe, label: stripProtocol(profile.website), href: profile.website },
    { icon: MapPin, label: profile.location },
  ];

  return (
    <div className="mx-auto my-[10mm] flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-white shadow-xl print:m-0 print:shadow-none">
      {/* En-tête */}
      <header className="relative bg-ink px-[14mm] pb-[6.5mm] pt-[8mm] text-white">
        <div className="absolute inset-x-0 bottom-0 h-[1mm] bg-linear-to-r from-cyber to-dev" />
        <p className="mb-[2mm] font-mono text-[8pt] text-cyber">~/{profile.handle}$ whoami</p>
        <h1 className="text-[25pt] font-extrabold leading-none tracking-tight">
          {profile.firstName}{' '}
          <span className="text-cyber">{profile.lastName}</span>
        </h1>
        <p className="mt-[2.5mm] text-[11pt] font-medium text-slate-300">{profile.title}</p>
        <ul className="mt-[4mm] flex flex-wrap gap-x-[5mm] gap-y-[1.5mm] text-[8pt] text-slate-300">
          {contacts.map(({ icon: Icon, label, href }) => (
            <li key={label} className="flex items-center gap-[1.5mm]">
              <Icon className="h-[3.2mm] w-[3.2mm] text-cyber" />
              {href ? <a href={href}>{label}</a> : label}
            </li>
          ))}
        </ul>
      </header>

      <div className="grid flex-1 grid-cols-[62mm_1fr]">
        {/* Colonne latérale */}
        <aside className="space-y-[6mm] bg-slate-50 px-[8mm] py-[7mm]">
          <section>
            <SideHeading>Compétences</SideHeading>
            <div className="space-y-[3.5mm]">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-[1.2mm] text-[8.5pt] font-semibold text-ink">{group.title}</h3>
                  <ul className="flex flex-wrap gap-[1.2mm]">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-[1mm] border px-[1.5mm] py-[0.4mm] text-[7.3pt] ${
                          group.domain === 'cyber'
                            ? 'border-green-200 bg-green-50 text-green-900'
                            : 'border-cyan-200 bg-cyan-50 text-cyan-900'
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SideHeading>Langues</SideHeading>
            <ul className="space-y-[1mm] text-[8.5pt]">
              {profile.languages.map((l) => (
                <li key={l.name} className="flex justify-between">
                  <span className="text-ink">{l.name}</span>
                  <span className="text-slate-500">{l.level}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SideHeading>Qualités</SideHeading>
            <ul className="space-y-[1mm] text-[8.5pt] text-ink">
              {profile.qualities.map((q) => (
                <li key={q}>
                  <span className="text-cyber-print">→</span> {q}
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Colonne principale */}
        <main className="space-y-[4mm] px-[10mm] pb-[5mm] pt-[6.5mm] text-[8.6pt] leading-[1.4]">
          <section>
            <Heading>Profil</Heading>
            <p>{profile.summary}</p>
          </section>

          <section>
            <Heading>Expérience professionnelle</Heading>
            <div className="space-y-[3.5mm]">
              {experiences.map((exp) => (
                <article key={exp.id}>
                  <div className="flex items-baseline justify-between gap-[3mm]">
                    <h3 className="text-[9.5pt] font-semibold text-ink">
                      {exp.position} <span className="font-normal text-slate-500">— {exp.company}</span>
                    </h3>
                    <span className="shrink-0 font-mono text-[7.5pt] text-dev-print">{exp.period}</span>
                  </div>
                  <p className="mb-[1mm] text-[8pt] text-slate-500">
                    {exp.type} · {exp.location}
                  </p>
                  <ul className="space-y-[0.5mm]">
                    {exp.description.map((item) => (
                      <li key={item} className="flex gap-[2mm]">
                        <span className="text-cyber-print">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <Heading>Projets</Heading>
            <div className="space-y-[2.8mm]">
              {detailed.map((project) => (
                <article key={project.id}>
                  <div className="flex items-baseline justify-between gap-[3mm]">
                    <h3 className="text-[9.5pt] font-semibold text-ink">
                      {project.title} <span className="font-normal text-slate-500">— {project.subtitle}</span>
                    </h3>
                    {project.note && <span className="shrink-0 text-[7.5pt] text-slate-500">{project.note}</span>}
                  </div>
                  <p>{project.description}</p>
                  <p className="mt-[0.5mm] font-mono text-[7.3pt] text-dev-print">
                    {project.technologies.slice(0, MAX_TECH).join(' · ')}
                  </p>
                </article>
              ))}
            </div>
            <h3 className="mb-[1.2mm] mt-[3.5mm] text-[8.5pt] font-semibold text-ink">Autres projets</h3>
            <ul className="space-y-[0.8mm]">
              {others.map((project) => (
                <li key={project.id} className="flex gap-[2mm]">
                  <span className="text-cyber-print">▹</span>
                  <span>
                    <span className="font-medium text-ink">{project.title}</span>
                    <span className="text-slate-500"> — {project.subtitle}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Formation</Heading>
            <div className="space-y-[2.5mm]">
              {education.map((edu) => (
                <article key={edu.degree} className="flex items-baseline justify-between gap-[3mm]">
                  <div>
                    <h3 className="text-[9.5pt] font-semibold text-ink">{edu.degree}</h3>
                    <p className="text-[8pt] text-slate-500">
                      {edu.school} — {edu.location}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[7.5pt] text-dev-print">{edu.period}</span>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
