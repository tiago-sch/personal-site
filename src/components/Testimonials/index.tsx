import styles from './styles.module.scss'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
}

// TODO: replace with real testimonials
const testimonials: Testimonial[] = [
  {
    quote: 'Tiago delivered a pixel-perfect implementation ahead of schedule and was a pleasure to work with throughout. His attention to detail and communication made the project seamless.',
    name: '[Name]', // TODO: replace
    title: '[Title]', // TODO: replace
    company: '[Company]', // TODO: replace
  },
  {
    quote: 'One of the most technically thorough frontend engineers I\'ve worked with. Tiago consistently raised the bar on code quality, accessibility, and performance.',
    name: '[Name]', // TODO: replace
    title: '[Title]', // TODO: replace
    company: '[Company]', // TODO: replace
  },
]

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className={styles.testimonials} data-animate>
      <div className="container">
        <h2 className={styles.testimonials__heading}>Kind Words</h2>

        <div className={styles.testimonials__grid}>
          {testimonials.map((t, i) => (
            <blockquote key={i} className={styles.testimonial}>
              <p className={styles.testimonial__quote}>&ldquo;{t.quote}&rdquo;</p>
              <footer className={styles.testimonial__footer}>
                <span className={styles.testimonial__name}>{t.name}</span>
                <span className={styles.testimonial__meta}>
                  {t.title} at {t.company}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
