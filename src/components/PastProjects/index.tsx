import Image from 'next/image'
import ExternalLink from '../ExternalLink'
import styles from './styles.module.scss'

interface Project {
  title: string
  role: string
  problem: string
  outcome: string
  techStack: string[]
  aiPowered: boolean
  thumbnail: string
  liveUrl: string
  caseStudyUrl?: string
}

const projects: Project[] = [
  {
    title: 'Alamo Rent a Car',
    role: 'Frontend Developer', // TODO: replace with actual role
    problem: 'Modernise the customer-facing booking flow to increase conversion across devices.', // TODO: replace
    outcome: 'Delivered a responsive, accessible booking experience used by millions of customers globally.', // TODO: replace
    techStack: ['React', 'TypeScript', 'SASS', 'Node.js'],
    aiPowered: false,
    thumbnail: '/images/portfolio/alamo.jpg',
    liveUrl: 'https://www.alamo.com/en/home.html',
  },
  {
    title: 'Baker Hughes',
    role: 'UI Developer', // TODO: replace with actual role
    problem: 'Build scalable UI components for a complex industrial data platform.', // TODO: replace
    outcome: 'Shipped a component library used across multiple internal enterprise applications.', // TODO: replace
    techStack: ['React', 'TypeScript', 'Styled Components', 'Jest'],
    aiPowered: false,
    thumbnail: '/images/portfolio/baker-hughes.jpg',
    liveUrl: 'https://www.bakerhughes.com/',
  },
  {
    title: 'Muambator',
    role: 'Frontend Lead', // TODO: replace with actual role
    problem: 'Help Brazilian shoppers track international purchases in real time.', // TODO: replace
    outcome: 'Rebuilt the tracking interface with a faster, mobile-first experience.', // TODO: replace
    techStack: ['React', 'Next.js', 'SASS', 'JavaScript'],
    aiPowered: false,
    thumbnail: '/images/portfolio/muambator.jpg',
    liveUrl: 'https://www.muambator.com.br/',
  },
  {
    title: 'Perestroika',
    role: 'Frontend Developer', // TODO: replace with actual role
    problem: 'Create an engaging online platform for a leading Brazilian creative school.', // TODO: replace
    outcome: 'Launched a performant, visually rich course catalogue site.', // TODO: replace
    techStack: ['React', 'TypeScript', 'SASS', 'Next.js'],
    aiPowered: false,
    thumbnail: '/images/portfolio/perestroika.jpg',
    liveUrl: 'https://www.perestroika.com.br/',
  },
  // TODO: add AI project
  {
    title: 'AI Feature / Experiment',
    role: 'Solo Developer',
    problem: '// TODO',
    outcome: '// TODO',
    techStack: ['Claude API', 'Next.js', 'TypeScript'],
    aiPowered: true,
    thumbnail: '/images/mirage-pale.png',
    liveUrl: '#', // TODO: replace with real URL
  },
]

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, role, problem, outcome, techStack, aiPowered, thumbnail, liveUrl, caseStudyUrl } = project

  return (
    <li className={styles.card}>
      <div className={styles.card__thumbnail}>
        <Image
          src={thumbnail}
          alt={`Screenshot of ${title}`}
          fill
          loading="lazy"
          className={styles['card__thumb-img']}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {aiPowered && (
          <span className={styles['card__ai-badge']}>AI-powered</span>
        )}
        <div className={styles.card__overlay}>
          <p className={styles['card__overlay-role']}>{role}</p>
          <div className={styles['card__overlay-stack']}>
            {techStack.map(t => (
              <span key={t} className={styles['card__stack-tag']}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__role}>{role}</p>
        <p className={styles.card__problem}>{problem}</p>
        <p className={styles.card__outcome}>{outcome}</p>

        <div className={styles['card__stack']}>
          {techStack.map(t => (
            <span key={t} className={styles['card__stack-tag']}>{t}</span>
          ))}
        </div>

        <div className={styles.card__links}>
          <ExternalLink href={liveUrl} className={styles['card__link']}>
            View Live ↗
          </ExternalLink>
          {caseStudyUrl && (
            <ExternalLink href={caseStudyUrl} className={`${styles['card__link']} ${styles['card__link--secondary']}`}>
              Case Study
            </ExternalLink>
          )}
        </div>
      </div>
    </li>
  )
}

const PastProjects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects} data-animate>
      <div className="container">
        <h2 className={styles.projects__title}>Past Projects</h2>
        <p className={styles.projects__subtitle}>
          A selection of clients and products I&apos;ve had the pleasure of working on:
        </p>

        <ul className={styles.projects__list}>
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PastProjects
