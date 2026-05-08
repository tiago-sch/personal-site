import { type Metadata } from 'next'
import styles from './styles.module.scss'
import FilteredGrid, { type LojinhaItem } from '../../src/components/Store/FilteredGrid'
import { simRacingItems } from '../../src/data/simracing'

export const metadata: Metadata = {
  title: "Lojinha do Tiago — Usados com carinho",
  description: "Vendo itens usados em ótimo estado. Interessou? Entra em contato pelo Instagram ou WhatsApp.",
}

const brlFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format

function parseSimPrice(price: string): number | null {
  if (!price.startsWith('R$')) return null
  const n = Number(price.replace('R$', '').trim().replace(/\./g, '').replace(',', '.'))
  return isNaN(n) ? null : n
}

const Store = async () => {
  // Fetch Google Sheets items (optional — page still works without env var)
  let sheetsItems: LojinhaItem[] = []
  try {
    if (process.env.NEXT_APP_LOJINHA_URL) {
      const fetched = await fetch(process.env.NEXT_APP_LOJINHA_URL, { next: { revalidate: 3600 } })
      const data = await fetched.json()
      sheetsItems = (data?.values ?? []).map((item: string[], idx: number) => ({
        id: `outros-${item[1] ?? idx}`,
        name: item[0],
        image: item[4],
        price: Number(item[3]),
        priceLabel: brlFormatter(Number(item[3])),
        description: item[2],
        sold: item[5] === 'TRUE',
        category: 'outros' as const,
      }))
    }
  } catch {
    // silently degrade — sim racing items still show
  }

  // Map sim racing items to unified type (skip items without a real price)
  const simItems: LojinhaItem[] = simRacingItems
    .map(item => {
      const price = item.price ? parseSimPrice(item.price) : null
      if (price === null) return null
      return {
        id: `simracing-${item.id}`,
        name: item.name,
        subtitle: item.subtitle,
        image: item.image ?? '',
        price,
        priceLabel: item.price!,
        sold: item.sold ?? false,
        category: 'sim-racing' as const,
        mlLink: item.mlLink,
        olxLink: item.olxLink,
      } satisfies LojinhaItem
    })
    .filter((i): i is LojinhaItem => i !== null)

  const allItems: LojinhaItem[] = [...simItems, ...sheetsItems]
  const available = allItems.filter(i => !i.sold).length

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
            <span className={styles['page__featured-title']}>Setup Sim Racing</span>
            <span className={styles['page__featured-sub']}>
              Direct Drive Fanatec 8Nm · Monitor 32" 1440p · Cockpit profissional · vendendo peça por peça
            </span>
            <span className={styles['page__featured-cta']}>Ver detalhes completos →</span>
          </a>

          <FilteredGrid items={allItems} />
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
