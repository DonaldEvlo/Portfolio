import { Code2, Shield } from 'lucide-react';
import { skillGroups } from '../data/profile';
import { Section, Tag } from './ui';

const domains = [
  { key: 'cyber', label: 'Cybersécurité', icon: Shield, color: 'text-cyber', bar: 'bg-cyber' },
  { key: 'dev', label: 'Développement', icon: Code2, color: 'text-dev', bar: 'bg-dev' },
] as const;

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="compétences"
      title="Deux casquettes, une même stack."
      intro="Les outils et langages que j'utilise au quotidien, côté défense comme côté construction."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {domains.map((domain) => (
          <div key={domain.key} className="card relative overflow-hidden p-7">
            <div className={`absolute inset-x-0 top-0 h-px ${domain.bar} opacity-60`} />
            <h3 className="mb-7 flex items-center gap-3 text-xl font-semibold text-white">
              <domain.icon className={`h-6 w-6 ${domain.color}`} />
              {domain.label}
            </h3>
            <div className="space-y-6">
              {skillGroups
                .filter((group) => group.domain === domain.key)
                .map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500">{group.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item} tone={domain.key}>
                          {item}
                        </Tag>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
