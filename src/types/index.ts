export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'security' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'security' | 'web' | 'mobile';
  status: 'completed' | 'in-progress';
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}