import Image from 'next/image';
import styles from './styles.module.scss';

const IntroBanner: React.FC = () => {
  return (
    <section id="hero" className={styles.banner}>
      <div className={`container ${styles.banner__container}`}>

        <div className={styles.banner__content}>
          <p className={styles.banner__pretitle}>Hello, I&apos;m</p>
          <h1 className={styles.banner__title}>Tiago Schmidt</h1>
          <p className={styles.banner__role}>Frontend Engineer</p>
          <p className={styles.banner__tagline}>
            I build fast, accessible web products with React, TypeScript, and AI.
          </p>
          <p className={styles.banner__description}>
            With 5+ years of experience across enterprise clients and startups, I specialize in
            scalable component architecture, mobile-first interfaces, and AI-powered features.
            I care deeply about performance, accessibility, and the details that make products feel polished.
          </p>
          <div className={styles.banner__ctas}>
            <a href="#projects" className="btn btn--primary">View My Work</a>
            <a href="#contact" className="btn btn--secondary">Get in Touch</a>
          </div>
        </div>

        <div className={styles['banner__image-holder']}>
          <Image
            src="/images/profile-photo.png"
            alt="Tiago Schmidt — Frontend Engineer"
            fill
            priority
            className={styles.banner__image}
          />
        </div>

      </div>
    </section>
  )
}

export default IntroBanner
