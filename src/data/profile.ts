import type { Education, Experience, Project, SkillGroup } from '../types';

export const profile = {
  firstName: 'Donald William',
  lastName: 'Kodjo EVLO',
  handle: 'donald',
  title: 'Ingénieur en Cybersécurité & Développeur',
  location: 'Dakar, Sénégal',
  email: 'evlodonald@gmail.com',
  github: 'https://github.com/DonaldEvlo',
  linkedin: 'https://www.linkedin.com/in/donald-william-kodjo-evlo-7959732b2/',
  website: 'https://donaldevlo.github.io/Portfolio/',
  /** Généré par `npm run cv` à partir de cv.html. */
  cv: `${import.meta.env.BASE_URL}CV_Donald_William_Kodjo_EVLO.pdf`,
  roles: [
    'Ingénieur en cybersécurité',
    'Threat Intelligence',
    'Développeur mobile Flutter',
    'Forensics & IA',
    'Développeur web full-stack',
  ],
  summary:
    "Ingénieur en Sécurité des Systèmes d'Information, je combine une double expertise en cybersécurité et en développement logiciel. Passionné par la threat intelligence et la forensics numérique, je conçois des outils concrets qui intègrent l'Intelligence Artificielle à la veille, à l'investigation et à l'analyse de menaces.",
  about: [
    "Mon parcours m'a mené du génie logiciel et de l'administration réseau jusqu'à un Master en Sécurité des Systèmes d'Information à l'École Supérieure Polytechnique de Dakar.",
    "Ce profil transversal, du pentest au développement mobile, me donne une vue panoramique de la sécurité : je sais comment une application est construite, et comment elle peut être attaquée.",
  ],
  qualities: ['Travail en équipe', "Ouverture d'esprit", 'Dynamisme', 'Rigueur'],
  languages: [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Notions' },
  ],
};

export const skillGroups: SkillGroup[] = [
  { title: 'Threat Intelligence', domain: 'cyber', items: ['Veille dark web (Tor)', 'STIX 2.1', 'Admiralty & TLP', 'NIS2'] },
  { title: 'Sécurité offensive', domain: 'cyber', items: ['Pentesting', 'Burp Suite', 'OWASP ZAP', 'Metasploit'] },
  { title: 'Analyse réseau', domain: 'cyber', items: ['Wireshark', 'Nmap'] },
  { title: 'Forensics & IA', domain: 'cyber', items: ['Investigation numérique', "Analyse d'artefacts", 'LLM locaux (Ollama)', 'Détection d’anomalies'] },
  { title: 'Développement web', domain: 'dev', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Express'] },
  { title: 'Développement applicatif', domain: 'dev', items: ['Flutter', 'Dart', 'Kotlin', 'Java', 'Python', 'C#'] },
  { title: 'Back-end & données', domain: 'dev', items: ['SQL', 'PostgreSQL', 'MySQL', 'FastAPI', 'Supabase', 'Docker'] },
];

export const experiences: Experience[] = [
  {
    id: 'dashmake',
    company: 'Dashmake',
    position: 'Développeur Web et Mobile',
    type: 'Stage',
    location: 'Remote',
    period: 'Déc. 2024 – Janv. 2026',
    description: [
      'Développement et intégration de nouveaux modules fonctionnels',
      "Conception d'une nouvelle version du site web de l'entreprise",
    ],
    technologies: ['Web', 'Mobile'],
  },
  {
    id: 'klumer',
    company: 'Klumer',
    position: 'Développeur Mobile Flutter',
    type: 'Stage',
    location: 'Lomé, Togo',
    period: 'Mai 2024 – Oct. 2024',
    description: [
      "Développement et intégration de nouveaux modules fonctionnels au sein d'une application mobile existante",
      "Collaboration avec l'équipe technique dans un environnement Agile",
    ],
    technologies: ['Flutter', 'Dart', 'Agile'],
  },
];

export const education: Education[] = [
  {
    degree: "Master en Sécurité des Systèmes d'Information",
    school: 'École Supérieure Polytechnique (ESP), UCAD',
    location: 'Dakar, Sénégal',
    period: '2024 – 2026',
  },
  {
    degree: 'Licence en Génie Logiciel – Administration Réseaux',
    school: 'École Supérieure de Technologie et de Management (ESTM)',
    location: 'Dakar, Sénégal',
    period: '2020 – 2023',
  },
];

export const projects: Project[] = [
  {
    id: 'underworld',
    title: 'Underworld Monitor',
    subtitle: 'Plateforme de Threat Intelligence dark web',
    description:
      "Plateforme auto-hébergée de veille sur les fuites de données publiées sur le dark web. Elle lit les sites de fuite des groupes de rançongiciel, les forums et Telegram via Tor, repère les organisations surveillées et produit pour chacune une alerte vérifiable : qui revendique, quand, avec quelles preuves et à quel point c'est grave.",
    highlights: [
      'Collecte exclusivement via Tor, depuis un réseau Docker isolé',
      'Classement par règles puis arbitrage par un LLM local (Ollama), sans fuite de données',
      'Gravité NIS2, crédibilité, notation Admiralty et marquage TLP',
      'Exports PDF, STIX 2.1 et CSV, plus de 1 600 tests',
    ],
    technologies: ['Python', 'FastAPI', 'Celery', 'PostgreSQL', 'Tor', 'Ollama', 'spaCy', 'React', 'TypeScript', 'Docker'],
    categories: ['security', 'web'],
    featured: true,
    flagship: true,
    image: 'projects/underworld-monitor.png',
    repo: 'https://github.com/DonaldEvlo/Underworld-Monitor',
  },
  {
    id: 'guardpay',
    title: 'GuardPay AI',
    subtitle: 'Scanner APK assisté par IA',
    description:
      "Système multi-couches de détection d'attaques sur APK Android. L'application audite l'appareil et les fichiers APK, puis un LLM local explique les risques de sécurité identifiés.",
    highlights: [
      '9 vecteurs de détection natifs en Kotlin',
      'Scoring comportemental embarqué, fonctionnel hors ligne',
      'Enrichissement par Qwen 2.5 via Ollama et Isolation Forest',
    ],
    technologies: ['Flutter', 'Kotlin', 'FastAPI', 'Ollama', 'scikit-learn', 'PostgreSQL', 'Redis', 'Docker'],
    categories: ['security', 'mobile'],
    featured: true,
    repo: 'https://github.com/DonaldEvlo/Mobile_Project_V2',
  },
  {
    id: 'forensics',
    title: 'Plateforme Forensics Windows',
    subtitle: "Agent de collecte d'artefacts",
    description:
      "Agent desktop de collecte automatisée d'artefacts système Windows, avec une interface web d'administration pour visualiser de façon centralisée les artefacts collectés.",
    highlights: [
      'Collecteurs modulaires (USB, processus…)',
      'API FastAPI authentifiée et historique des sessions',
      'Export JSON et téléversement vers Google Drive',
    ],
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'ttkbootstrap'],
    categories: ['security', 'desktop'],
    featured: true,
    repo: 'https://github.com/DonaldEvlo/Forensic-Windows',
    note: "Projet d'équipe",
  },
  {
    id: 'safex',
    title: 'SafeX',
    subtitle: 'Plateforme de communication sécurisée',
    description:
      'Plateforme web de messagerie et de partage de fichiers en temps réel, pensée « security by design » pour garantir la confidentialité, l’intégrité et la disponibilité des échanges.',
    highlights: [
      'Authentification 2FA et contrôle d’accès RBAC',
      'Chiffrement de bout en bout des messages et fichiers',
      'Journalisation complète des activités',
    ],
    technologies: ['React', 'Firebase', '2FA', 'RBAC', 'E2EE'],
    categories: ['security', 'web'],
    featured: true,
    repo: 'https://github.com/DonaldEvlo/SafeX',
  },
  {
    id: 'evaluation',
    title: "Plateforme d'évaluation automatisée",
    subtitle: 'Correction de TP de bases de données par IA',
    description:
      "Plateforme académique où les enseignants publient des exercices et où les soumissions des étudiants sont corrigées automatiquement par une IA, avec détection de plagiat.",
    highlights: [
      'Correction par DeepSeek via Ollama',
      'Authentification OAuth2 et fichiers chiffrés',
      'Anti-plagiat (Jaccard, TF-IDF)',
    ],
    technologies: ['React', 'Express', 'Supabase', 'PostgreSQL', 'Ollama', 'OAuth2'],
    categories: ['web'],
    featured: false,
    repo: 'https://github.com/DonaldEvlo/Projet_Base_De_Donnees_Avancees',
    demo: 'https://projet-base-de-donnees-avancees.vercel.app',
  },
  {
    id: 'audit-web',
    title: 'Analyse de vulnérabilités web',
    subtitle: 'Audit de sécurité applicatif',
    description:
      "Audit de sécurité d'une application web avec OWASP ZAP : identification des failles, qualification des risques et application des correctifs.",
    highlights: ['Scan actif et passif', 'Priorisation des vulnérabilités', 'Correctifs appliqués et vérifiés'],
    technologies: ['OWASP ZAP', 'Burp Suite', 'OWASP Top 10'],
    categories: ['security'],
    featured: false,
  },
  {
    id: 'certificats',
    title: 'Certificats de résidence',
    subtitle: 'Plateforme de génération de documents',
    description: 'Plateforme web de génération et de gestion de certificats de résidence.',
    highlights: ['Génération de documents', 'Gestion des demandes'],
    technologies: ['Web'],
    categories: ['web'],
    featured: false,
  },
  {
    id: 'inscriptions',
    title: 'Gestion des inscriptions scolaires',
    subtitle: 'Application desktop',
    description: "Application desktop de gestion des inscriptions et du suivi des élèves d'un établissement scolaire.",
    highlights: ['Inscriptions et dossiers élèves', 'Suivi de la scolarité'],
    technologies: ['Desktop'],
    categories: ['desktop'],
    featured: false,
  },
];
