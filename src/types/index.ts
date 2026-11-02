export type ProjectCategory = 'security' | 'web' | 'mobile' | 'desktop';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  categories: ProjectCategory[];
  featured: boolean;
  repo?: string;
  demo?: string;
  note?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  domain: 'cyber' | 'dev';
  items: string[];
}
