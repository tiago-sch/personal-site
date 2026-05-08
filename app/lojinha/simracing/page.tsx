import { type Metadata } from 'next'
import Image from 'next/image'
import styles from './styles.module.scss'
import { simRacingItems, simRacingCategories } from '../../../src/data/simracing'
import SimRacingGrid from '../../../src/components/SimRacing/ItemsGrid'

export const metadata: Metadata = {
  title: "Setup Sim Racing — Lojinha do Tiago",
  description: "Setup de sim racing montado com cuidado ao longo dos anos. Fanatec DD Pro 8Nm, cockpit Extreme Simracing VE-3, monitores 32\" e muito mais. Vendendo peça por peça.",
}

const WHATSAPP = 'https://wa.me/5551991111210'

export default function SimRacingPage() {
  return (
    <div className={styles.page}>

      <header className={styles.page__nav}>
        <a href="/lojinha" className={styles.page__back}>← voltar à lojinha</a>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.hero__inner}`}>
          <div className={styles.hero__text}>
            <span className={styles.hero__eyebrow}>Lojinha do Tiago</span>
            <h1 className={styles.hero__title}>Setup Sim Racing</h1>
            <p className={styles.hero__tagline}>
              Setup montado com cuidado ao longo dos anos — Direct Drive Fanatec,
              cockpit profissional, monitores 32" e tudo que você precisa pra correr.
              Vendendo <strong>peça por peça</strong>.
            </p>
            <p className={styles.hero__installments}>
              Parcelamento disponível via <strong>MercadoPago</strong> — consulte as condições pelo WhatsApp.
            </p>
            <div className={styles.hero__ctas}>
              <a
                href={`${WHATSAPP}?text=Oi Tiago! Vi o seu setup sim racing e tenho interesse em uma peça!`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles['hero__btn']} ${styles['hero__btn--primary']}`}
              >
                Tenho interesse
              </a>
              <a href="#items" className={`${styles['hero__btn']} ${styles['hero__btn--secondary']}`}>
                Ver todos os itens
              </a>
            </div>
          </div>

          <div className={styles.hero__image}>
            <div className={styles.hero__gallery}>
              <div className={styles['hero__gallery-main']}>
                <Image src="/images/simracing/IMG_1096.jpeg" alt="Setup sim racing completo — vista frontal" fill sizes="(max-width: 1024px) 100vw, 420px" className={styles['hero__gallery-img']} />
              </div>
              <div className={styles['hero__gallery-thumbs']}>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1097.jpeg" alt="Setup sim racing — vista lateral" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1093.jpeg" alt="Setup sim racing — volantes" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1095.jpeg" alt="Setup sim racing — volante Formula v2.5" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1094.jpeg" alt="Setup sim racing — câmbio e freio de mão" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1098.jpeg" alt="Setup sim racing — pedais" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items by category */}
      <section id="items" className={styles.items}>
        <div className="container">
          <SimRacingGrid items={simRacingItems} categories={simRacingCategories} />
        </div>
      </section>

    </div>
  )
}
