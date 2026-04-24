import { type Metadata } from 'next'
import StoreList from "../../src/components/Store/List";
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: "Lojinha do Tiago — Usados com carinho",
  description: "Vendo itens usados em ótimo estado. Interessou? Entra em contato pelo Instagram ou WhatsApp.",
}

const Store = async () => {
  const fetched = await fetch(process.env.NEXT_APP_LOJINHA_URL, { next: { revalidate: 3600 } });
  const data = await fetched.json();

  const items = data?.values?.map(item => ({
    name: item[0],
    slug: item[1],
    value: item[3],
    description: item[2],
    pic: item[4],
    sold: item[5] === "TRUE"
  }));

  const available = items?.filter(i => !i.sold).length ?? 0

  return (
    <div className={styles.page}>

      <header className={styles.page__header}>
        <a href="/" className={styles.page__back}>← voltar ao portfólio</a>
      </header>

      <main className={styles.page__main}>
        <div className={`container ${styles.page__hero}`}>
          <h1 className={styles.page__title}>Lojinha do Tiago</h1>
          <p className={styles.page__tagline}>
            Itens usados em ótimo estado, vendidos com carinho.
          </p>
          <p className={styles.page__payment}>
            Aceito pagamento via <strong>MercadoPago</strong>, inclusive parcelado.
          </p>
          {available > 0 && (
            <p className={styles.page__count}>{available} {available === 1 ? 'item disponível' : 'itens disponíveis'}</p>
          )}
        </div>

        <div className="container">
          <a href="/lojinha/simracing" className={styles.page__featured}>
            <span className={styles['page__featured-badge']}>⚡ Destaque</span>
            <span className={styles['page__featured-title']}>Setup Sim Racing Completo</span>
            <span className={styles['page__featured-sub']}>
              Direct Drive Fanatec 8Nm · Triple 32" 1440p · Cockpit profissional · 15+ itens
            </span>
            <span className={styles['page__featured-cta']}>Ver setup →</span>
          </a>
          <StoreList items={items} />
        </div>

        <div className={`container ${styles.page__contact}`}>
          <h2 className={styles.page__contact_heading}>Interessou?</h2>
          <p className={styles.page__contact_sub}>
            Manda mensagem pelo Instagram ou WhatsApp que a gente se acerta!
          </p>
          <p className={styles.page__contact_payment}>
            Aceito pagamento via <strong>MercadoPago</strong>, inclusive parcelado.
          </p>
          <div className={styles.page__contact_links}>
            <a
              href="https://www.instagram.com/tiago.sch/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles['page__cta-btn']} ${styles['page__cta-btn--instagram']}`}
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5551991111210"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles['page__cta-btn']} ${styles['page__cta-btn--whatsapp']}`}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Store;
