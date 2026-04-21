import styles from './styles.module.scss'

const stats = [
  { value: '9+', label: 'Years as Developer' },
  { value: '18+', label: 'Years in IT' },
  { value: 'Porto Alegre, BR', label: 'Location' },
  { value: 'Freelance', label: 'Availability' },
]

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about} data-animate>
      <div className={`container ${styles.about__container}`}>

        <div className={styles.about__bio}>
          <h2 className={styles.about__heading}>About Me</h2>
          <p className={styles.about__text}>
            I&apos;m a frontend engineer based in Porto Alegre, Brazil, available for freelance projects. I&apos;ve shipped products for global brands like Alamo Rent a Car
            and Baker Hughes, and I bring the same care and rigor to every project regardless of size.
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
