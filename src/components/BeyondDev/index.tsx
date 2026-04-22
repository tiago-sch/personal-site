import ExternalLink from '../ExternalLink'
import SocialBar from '../SocialBar'
import styles from './styles.module.scss'

const tarsilaUrl = 'https://open.spotify.com/artist/3UJ7HEUS0wxJ5GpfVoyYzP?si=3O4svjqAR0WYk0r_hs_kHw'
const lieUrl = 'https://open.spotify.com/artist/0isGagp4GJj7lmcTv5xwbI?si=5WQj_AbNT9GBQzwox1EgFQ'
const youtubeUrl = 'https://www.youtube.com/channel/UC3rwmHd3_QSePebtxolkTng'
const tsouUrl = 'https://www.instagram.com/tsou.painting/'

const cards = [
  {
    icon: '🎸',
    category: 'Music',
    description: 'Playing bass in two bands — melodic rock act Tarsila and metal project Letters Into Eternity.',
    links: [
      { label: 'Tarsila on Spotify', href: tarsilaUrl },
      { label: 'Letters Into Eternity', href: lieUrl },
    ],
  },
  {
    icon: '🎮',
    category: 'Gaming & Video',
    description: 'Sharing gaming clips, miniature painting timelapses, and developer content on YouTube.',
    links: [
      { label: 'YouTube Channel', href: youtubeUrl },
    ],
  },
  {
    icon: '🎨',
    category: 'Art & 3D Printing',
    description: 'Painting RPG miniatures and printing 3D models. Follow the journey on Instagram.',
    links: [
      { label: 'Tsou Painting on Instagram', href: tsouUrl },
    ],
  },
]

const BeyondDev: React.FC = () => {
  return (
    <section id="beyond" className={styles['beyond-dev']} data-animate>
      <div className="container">

        <h2 className={styles['beyond-dev__title']}>Beyond the Developer</h2>
        <p className={styles['beyond-dev__intro']}>
          Outside of work, I stay creative through music, miniature painting, and 3D printing.
        </p>

        <div className={styles['beyond-dev__grid']}>
          {cards.map(({ icon, category, description, links }) => (
            <div key={category} className={styles['beyond-dev__card']}>
              <span className={styles['beyond-dev__card-icon']} aria-hidden="true">{icon}</span>
              <h3 className={styles['beyond-dev__card-category']}>{category}</h3>
              <p className={styles['beyond-dev__card-desc']}>{description}</p>
              <div className={styles['beyond-dev__card-links']}>
                {links.map(({ label, href }) => (
                  <ExternalLink key={href} href={href} className={styles['beyond-dev__card-link']}>
                    {label} ↗
                  </ExternalLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SocialBar />

        <p className={styles['beyond-dev__foot-note']}>
          Proudly built using React, TypeScript, Next.js and SASS Modules.
        </p>
      </div>
    </section>
  )
}

export default BeyondDev
