export interface CvJob {
  company: string
  role: string
  period: string
  location: string
  description: string
}

export interface CvProject {
  name: string
  role: string
  description: string
  techStack: string[]
  url?: string
}

export interface CvSkillGroup {
  label: string
  items: string[]
}

export const cvPdfPath = '/cv/tiago-schmidt-cv.pdf'

export const cvHeader = {
  name: 'Tiago de Almeida Schmidt',
  title: 'Senior Front End Developer',
  location: 'Porto Alegre, RS — Brazil',
  links: [
    { label: 'tiagohammett@gmail.com', href: 'mailto:tiagohammett@gmail.com' },
    { label: 'linkedin.com/in/tiago-sch', href: 'https://www.linkedin.com/in/tiago-sch/' },
    { label: 'github.com/tiago-sch', href: 'https://github.com/tiago-sch' },
    { label: 'tiagoschmidt.com', href: 'https://www.tiagoschmidt.com' },
  ],
}

export const cvSummary = [
  'Senior Front End Developer with 10+ years building React/TypeScript applications for global products (Deel, Indeed, Petco, Alamo). I bridge tech and business teams to ship accessible, fast, and reliable user interfaces — with accessibility, usability, and web performance as core pillars.',
  'Experienced working across distributed, async, multi-continent teams, and mentoring developers along the way. I integrate AI features into production web apps — from streaming chat interfaces and tool-calling agents to RAG pipelines and AI-assisted developer workflows — and I build full-stack products end to end as a solo developer.',
]

export const cvCompetencies = [
  'React & TypeScript',
  'Web Accessibility',
  'Web Performance / Web Vitals',
  'Design Systems',
  'State Management (Redux / Context / React Query)',
  'Next.js & SEO',
  'LLM Integration (OpenAI / Gemini)',
  'Mentoring & Distributed Teams',
]

export const cvExperience: CvJob[] = [
  {
    company: 'Deel',
    role: 'Web Front End Developer',
    period: '08/2025 — Present',
    location: 'Remote',
    description:
      'Front end development for a payroll payments platform focused on Professional Employer Organization (PEO) and US organization registrations. React with an internal design system, React Query, TanStack libraries and MUI, working with teams across North America, LATAM, Europe and Asia.',
  },
  {
    company: 'Indeed',
    role: 'Senior Web Front End Developer',
    period: '04/2025 — 08/2025',
    location: 'Remote',
    description:
      'Front end development for the job search platform with an emphasis on accessibility, maintaining and shipping new features in a React/TypeScript codebase. Team based mostly in Latin America, collaborating with squads across the Americas.',
  },
  {
    company: 'Adaptive Build',
    role: 'Senior Web Front End Developer',
    period: '05/2024 — 01/2025',
    location: 'Remote',
    description:
      'Front end development for a financial SaaS platform for real estate and construction companies, using React/TypeScript with Redux and Context. Worked with colleagues in the USA and Brazil and end users in the USA, maintaining existing features and building new ones like digital Lien Waivers and data propagation flows between multiple objects with custom user options. Also contributed to the Django back end.',
  },
  {
    company: 'Everest ERP',
    role: 'Senior Web Front End Developer',
    period: '01/2022 — 05/2024',
    location: 'Remote',
    description:
      'Front end development for an ERP framework built from back-end-driven templates using React components and a proprietary GraphQL-based network layer. Worked with teams in Germany, USA, Vietnam and Brazil, supporting the ERP core — from financial to accounting flows — plus developer support, performance, usability and design system maintenance.',
  },
  {
    company: 'Oowlish / Petco',
    role: 'Senior Web Front End Developer',
    period: '07/2021 — 12/2021',
    location: 'Remote',
    description:
      'Front end development for the Petco e-commerce website on a Next.js/React architecture, supporting the business team with enhancements and new features like new payment methods. Async team across multiple time zones, helping new developers ramp up on the project.',
  },
  {
    company: 'Triider',
    role: 'Senior Web Front End Developer',
    period: '02/2021 — 06/2021',
    location: 'Remote',
    description:
      'Front end development focused on SEO and Web Vitals. Led the migration of a legacy Handlebars/LESS website to React with Next.js, moving all Web Vitals from red to green in 1.5 months.',
  },
  {
    company: 'IWS Isobar Brazil',
    role: 'Senior Web Front End Developer',
    period: '10/2018 — 01/2021',
    location: 'Remote',
    description:
      'Front end development mainly for the Enterprise and Alamo Rent a Car websites, integrating with Adobe AEM, .NET, Sitecore and Drupal back ends. Most projects used React with Redux, with a focus on usability and accessibility. Worked from small local teams to multi-continent ones, mentoring new talents, colleagues and interns.',
  },
  {
    company: 'Bode.io',
    role: 'Web Front End Developer',
    period: '05/2016 — 10/2018',
    location: 'Remote',
    description:
      'Front end development for learning platforms, CRMs, e-commerce, corporate websites and landing pages, mostly in Python/Django environments with SASS and JavaScript, plus back-end work in Django. Projects included Muambator, a tracker for Brazilian shoppers’ international purchases, where I rebuilt the tracking interface as a faster, mobile-first experience.',
  },
  {
    company: 'ITS System',
    role: 'Quality Analyst',
    period: '12/2014 — 12/2015',
    location: 'Remote',
    description:
      'Quality assurance for financial applications at Banco Topázio and Topázio Cartões. Led the QA team to improve processes, connect more closely with development, and introduce new tools and methodologies.',
  },
  {
    company: 'Stefanini / Dell',
    role: 'Quality Analyst Assistant',
    period: '08/2012 — 04/2014',
    location: 'Remote',
    description:
      'Quality analysis for Dell applications covering financial, insurance, security systems and POS. Mentored new trainees on Dell’s processes and QA methodologies.',
  },
  {
    company: 'Ação Informática / GIS Solutions',
    role: 'Project Manager — POC',
    period: '04/2008 — 04/2012',
    location: 'Remote',
    description:
      'Internal project management for Geographic Information Systems proofs of concept using the iSmart framework with Oracle Spatial. Also supported technicians on IBM hardware maintenance and new implementations.',
  },
]

export const cvProjects: CvProject[] = [
  {
    name: 'CastYou',
    role: 'Sole developer',
    description:
      'Casting marketplace connecting creative talent with producers and agencies across film, TV, theater and digital content. Built from scratch: architecture, back-end API, multiple user roles, AI-powered matching, AI-generated casting-call flyers, swipe-based matching, direct messaging, talent search with production-grade filters, and a community bounty system. Now in open beta.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'React Native', 'OpenAI API'],
    url: 'https://castyou.app/',
  },
  {
    name: 'FeelPick',
    role: 'Personal',
    description:
      'Mood-based movie picker: describe how you feel, tune energy, tone and pace, and get tailored film recommendations powered by OpenAI GPT.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'OpenAI GPT'],
    url: 'https://feelpick.com/',
  },
  {
    name: 'Lupah Imóveis',
    role: 'Freelance full-stack',
    description:
      'Real estate platform for a Curitiba agency (buy, sell, rent, property management). Built front end, back end and API with a strong focus on SEO, a conversion-focused listing experience, and integration with external property marketplaces.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'ORA — Objetos Reais para Archicad',
    role: 'Freelance full-stack',
    description:
      'Digital library of professionally modeled 3D Archicad objects based on real Brazilian furniture brands, with free registration and per-object downloads. Built in Django with a focus on SEO, usability and subscription integrations.',
    techStack: ['Django', 'Python'],
    url: 'https://orabim.com.br/',
  },
  {
    name: 'RPG Session Teller',
    role: 'Personal',
    description:
      'Turns messy bullet-point session notes into immersive, fantasy-style narrative text for Dungeon Masters and players.',
    techStack: ['React', 'Vite', 'Tailwind', 'Gemini API'],
    url: 'https://sessionteller.com/',
  },
  {
    name: 'DM Bard',
    role: 'Personal',
    description: 'Music player for tabletop RPG tables to play ambient music and soundscapes during sessions.',
    techStack: ['React'],
    url: 'https://dmbard.com/',
  },
]

export const cvSkills: CvSkillGroup[] = [
  {
    label: 'Front End',
    items: ['HTML / CSS / Optimization', 'JavaScript / TypeScript', 'React', 'Next.js', 'Context / Redux / Recoil / React Query'],
  },
  {
    label: 'Back End',
    items: ['Python (Django / Flask)', 'Node.js', 'PHP (Laravel)', 'REST / GraphQL', 'Next.js API routes'],
  },
  {
    label: 'AI',
    items: [
      'OpenAI (ChatGPT) API',
      'Gemini API',
      'Streaming chat',
      'Tool-calling agents',
      'RAG pipelines',
      'Claude Code (daily driver)',
    ],
  },
  {
    label: 'Other',
    items: ['Team Leadership / Mentoring', 'Web Accessibility', 'CI / Vite / Webpack'],
  },
]

export const cvLanguages = [
  { language: 'Portuguese', level: 'Native' },
  { language: 'English', level: 'Fluent' },
]
