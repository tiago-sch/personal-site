import Image from "next/image";
import ExternalLink from "../ExternalLink";
import styles from "./styles.module.scss";

interface Project {
  title: string;
  role: string;
  problem: string;
  outcome: string;
  techStack: string[];
  aiPowered: boolean;
  thumbnail?: string;
  comingSoon?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "CastYou",
    role: "Full-stack Developer",
    problem:
      "Connect creative talent — actors, musicians, dancers, and more — with producers across film, TV, theater, and digital content.",
    outcome:
      "Built solo from scratch: AI-powered matching, AI-generated casting-call flyers, swipe-based matching, direct messaging, and production-grade talent search. Now in open beta.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind", "React Native", "OpenAI"],
    aiPowered: true,
    thumbnail: "/images/portfolio/castyou.jpg",
    liveUrl: "https://castyou.app/",
  },
  {
    title: "Lupah",
    role: "Freelance Full-stack Developer",
    problem:
      "Build a modern real estate platform for a Curitiba agency to buy, sell, rent, and manage properties.",
    outcome:
      "Delivered front end, back end, and API with a strong SEO focus, a conversion-focused listing experience, and integrations with external property marketplaces.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
    aiPowered: true,
    thumbnail: "/images/portfolio/lupah.jpg",
  },
  {
    title: "FeelPick",
    role: "Solo Developer",
    problem:
      "Help people find the right film for how they feel right now, not just by genre or ratings.",
    outcome:
      "A mood-based movie picker: describe your feelings, tune energy, tone, and pace, and get tailored recommendations powered by OpenAI GPT.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "OpenAI GPT"],
    aiPowered: true,
    thumbnail: "/images/portfolio/feelpick.jpg",
    liveUrl: "https://feelpick.com/",
    githubUrl: "https://github.com/tiago-sch/movie-matcher",
  },
  {
    title: "RPG Session Teller",
    role: "Solo Developer",
    problem:
      "Turn messy bullet-point notes from tabletop RPG sessions into immersive, fantasy-style narrative text.",
    outcome:
      "An AI-powered storytelling tool that transforms bullet-point session notes into immersive, fantasy-style narrative text for tabletop RPG players.",
    techStack: ["React", "Vite", "Tailwind", "Gemini"],
    aiPowered: true,
    thumbnail: "/images/portfolio/session-teller.jpg",
    liveUrl: "https://sessionteller.com/",
  },
  {
    title: "Alamo Rent a Car",
    role: "Senior Frontend Developer · IWS Isobar",
    problem:
      "Evolve the Alamo and Enterprise rental websites across Adobe AEM, .NET, Sitecore, and Drupal back ends.",
    outcome:
      "Shipped usable, accessible React/Redux interfaces for a global audience while mentoring new developers and interns.",
    techStack: ["React", "Redux", "SASS", "Adobe AEM"],
    aiPowered: false,
    thumbnail: "/images/portfolio/alamo.jpg",
  },
  {
    title: "Muambator",
    role: "Frontend Developer · Bode.io",
    problem:
      "Help Brazilian shoppers track their international purchases.",
    outcome:
      "Rebuilt the tracking interface as a faster, mobile-first experience.",
    techStack: ["Django", "Python", "SASS", "Bootstrap"],
    aiPowered: false,
    thumbnail: "/images/portfolio/muambator.jpg",
  },
  {
    title: "ORA — Objetos Reais para Archicad",
    role: "Freelance Full-stack Developer",
    problem:
      "Give architects a library of professionally modeled 3D Archicad objects based on real Brazilian furniture brands.",
    outcome:
      "Built the Django platform end to end, with free registration, per-object downloads, SEO, and subscription integrations.",
    techStack: ["Django", "Python"],
    aiPowered: false,
    thumbnail: "/images/portfolio/ora.jpg",
    liveUrl: "https://orabim.com.br/",
  },
  {
    title: "DM Bard",
    role: "Solo Developer",
    problem:
      "Set the mood at tabletop RPG sessions without juggling playlists.",
    outcome:
      "A music player for ambient tracks and soundscapes, built for Dungeon Masters to use mid-session.",
    techStack: ["React"],
    aiPowered: false,
    thumbnail: "/images/portfolio/dmbard.jpg",
    liveUrl: "https://dmbard.com/",
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    role,
    problem,
    outcome,
    techStack,
    aiPowered,
    thumbnail,
    comingSoon,
    liveUrl,
    githubUrl,
  } = project;

  return (
    <li className={styles.card}>
      <div className={styles.card__thumbnail}>
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`Screenshot of ${title}`}
            fill
            loading="lazy"
            className={styles["card__thumb-img"]}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className={styles["card__thumb-placeholder"]} aria-hidden="true">
            {title}
          </div>
        )}
        {comingSoon && (
          <span className={styles["card__wip-badge"]}>In Development</span>
        )}
        {aiPowered && (
          <span className={styles["card__ai-badge"]}>AI-powered</span>
        )}
        <div className={styles.card__overlay}>
          <p className={styles["card__overlay-role"]}>{role}</p>
          <div className={styles["card__overlay-stack"]}>
            {techStack.map((t) => (
              <span key={t} className={styles["card__stack-tag"]}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__role}>{role}</p>
        <p className={styles.card__problem}>{problem}</p>
        <p className={styles.card__outcome}>{outcome}</p>

        <div className={styles["card__stack"]}>
          {techStack.map((t) => (
            <span key={t} className={styles["card__stack-tag"]}>
              {t}
            </span>
          ))}
        </div>

        {(liveUrl || githubUrl) && (
          <div className={styles.card__links}>
            {liveUrl && (
              <ExternalLink href={liveUrl} className={styles["card__link"]}>
                View Live ↗
              </ExternalLink>
            )}
            {githubUrl && (
              <ExternalLink
                href={githubUrl}
                className={`${styles["card__link"]} ${styles["card__link--secondary"]}`}
              >
                GitHub ↗
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

const PastProjects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects} data-animate>
      <div className="container">
        <h2 className={styles.projects__title}>Past Projects</h2>
        <p className={styles.projects__subtitle}>
          A selection of clients and products I&apos;ve had the pleasure of
          working on:
        </p>

        <ul className={styles.projects__list}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PastProjects;
