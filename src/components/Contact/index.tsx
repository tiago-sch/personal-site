import SocialBar from '../SocialBar'
import styles from './styles.module.scss'

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact} data-animate>
      <div className={`container ${styles.contact__container}`}>

        <h2 className={styles.contact__heading}>Let&apos;s Build Something Together</h2>
        <p className={styles.contact__sub}>
          Whether you have a project in mind, want to explore what AI can do for your product,
          or just want to say hello — my inbox is open.
        </p>

        <a href="mailto:tiagohammett@gmail.com" className="btn btn--primary">
          Say Hello
        </a>

        <SocialBar />

      </div>
    </section>
  )
}

export default Contact
