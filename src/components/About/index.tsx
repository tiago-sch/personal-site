import styles from './styles.module.scss'

const stats = [
  { value: '10+', label: 'Years as Developer' },
  { value: '18+', label: 'Years in IT' },
  { value: 'Porto Alegre, BR', label: 'Location' },
  { value: 'Open to Freelance', label: 'Availability' },
]

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about} data-animate>
      <div className={`container ${styles.about__container}`}>

        <div className={styles.about__bio}>
          <h2 className={styles.about__heading}>About Me</h2>
          <p className={styles.about__text}>
            I&apos;m a senior frontend engineer based in Porto Alegre, Brazil, currently building payroll
            products at Deel and open to freelance projects. I&apos;ve shipped interfaces for global brands
            like Indeed, Petco, Alamo Rent a Car, and Baker Hughes, and I bring the same care and rigor to
            every project regardless of size.
          </p>
          <p className={styles.about__text}>
            Accessibility, usability, and web performance are my core pillars — at Triider I led a
            legacy-to-Next.js migration that moved every Web Vital from red to green in six weeks. I&apos;ve
            spent most of my career on distributed teams across the Americas, Europe, and Asia, maintaining
            design systems and mentoring developers along the way.
          </p>
          <p className={styles.about__text}>
            Lately I&apos;ve been integrating AI tools and language models into the products I build —
            from intelligent UI features to AI-assisted developer workflows. When I&apos;m not coding,
            you&apos;ll find me playing in bands, painting miniatures, or printing 3D models.
          </p>
        </div>

        <div className={styles.about__stats}>
          {stats.map(({ value, label }) => (
            <div key={label} className={styles['about__stat-card']}>
              <span className={styles['about__stat-value']}>{value}</span>
              <span className={styles['about__stat-label']}>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
