import { type Metadata } from 'next'
import Link from 'next/link'
import styles from './styles.module.scss'
import PrintButton from './PrintButton'
import ExternalLink from '../../src/components/ExternalLink'
import {
  cvPdfPath,
  cvHeader,
  cvSummary,
  cvCompetencies,
  cvExperience,
  cvProjects,
  cvSkills,
  cvLanguages,
} from '../../src/data/cv'

export const metadata: Metadata = {
  title: 'Tiago Schmidt — CV',
  description: 'Curriculum vitae of Tiago Schmidt, Senior Front End Developer — React, TypeScript & AI.',
}

const Cv = () => {
  return (
    <main className={styles.cv}>
      <div className={styles.cv__toolbar}>
        <Link href="/" className={styles.cv__back}>← tiagoschmidt.com</Link>
        <div className={styles.cv__actions}>
          <PrintButton className="btn btn--secondary" />
          <a href={cvPdfPath} download className="btn btn--primary">Download PDF</a>
        </div>
      </div>

      <article className={styles.cv__sheet}>
        <header className={styles.cv__header}>
          <h1 className={styles.cv__name}>{cvHeader.name}</h1>
          <p className={styles.cv__title}>{cvHeader.title}</p>
          <p className={styles.cv__location}>{cvHeader.location}</p>
          <ul className={styles.cv__contacts}>
            {cvHeader.links.map(({ label, href }) => (
              <li key={href}>
                {href.startsWith('mailto:')
                  ? <a href={href}>{label}</a>
                  : <ExternalLink href={href}>{label}</ExternalLink>}
              </li>
            ))}
          </ul>
        </header>

        <section className={styles.cv__section}>
          <h2 className={styles.cv__heading}>Summary</h2>
          {cvSummary.map(paragraph => (
            <p key={paragraph.slice(0, 24)} className={styles.cv__text}>{paragraph}</p>
          ))}
          <ul className={styles.cv__tags}>
            {cvCompetencies.map(item => <li key={item} className={styles.cv__tag}>{item}</li>)}
          </ul>
        </section>

        <section className={styles.cv__section}>
          <h2 className={styles.cv__heading}>Experience</h2>
          <ol className={styles.cv__list}>
            {cvExperience.map(job => (
              <li key={`${job.company}-${job.period}`} className={styles.cv__entry}>
                <div className={styles['cv__entry-head']}>
                  <h3 className={styles['cv__entry-title']}>
                    {job.role} <span className={styles['cv__entry-org']}>· {job.company}</span>
                  </h3>
                  <span className={styles['cv__entry-meta']}>{job.period} · {job.location}</span>
                </div>
                <p className={styles.cv__text}>{job.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.cv__section}>
          <h2 className={styles.cv__heading}>Projects</h2>
          <ul className={styles.cv__list}>
            {cvProjects.map(project => (
              <li key={project.name} className={styles.cv__entry}>
                <div className={styles['cv__entry-head']}>
                  <h3 className={styles['cv__entry-title']}>
                    {project.url
                      ? <ExternalLink href={project.url}>{project.name}</ExternalLink>
                      : project.name}
                  </h3>
                  <span className={styles['cv__entry-meta']}>{project.role}</span>
                </div>
                <p className={styles.cv__text}>{project.description}</p>
                <p className={styles.cv__stack}>{project.techStack.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.cv__columns}>
          <section className={styles.cv__section}>
            <h2 className={styles.cv__heading}>Skills</h2>
            <dl className={styles.cv__skills}>
              {cvSkills.map(group => (
                <div key={group.label} className={styles['cv__skill-row']}>
                  <dt>{group.label}</dt>
                  <dd>{group.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.cv__section}>
            <h2 className={styles.cv__heading}>Languages</h2>
            <dl className={styles.cv__skills}>
              {cvLanguages.map(({ language, level }) => (
                <div key={language} className={styles['cv__skill-row']}>
                  <dt>{language}</dt>
                  <dd>{level}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Cv
