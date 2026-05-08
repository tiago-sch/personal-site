'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

export interface LojinhaItem {
  id: string
  name: string
  subtitle?: string
  image: string
  price: number
  priceLabel: string
  description?: string
  sold: boolean
  category: 'sim-racing' | 'outros'
  mlLink?: string
  olxLink?: string
}

const PRICE_RANGES = [
  { id: 'todos', label: 'Todos' },
  { id: 'up-to-2k', label: 'Até R$2k', max: 2000 },
  { id: '2k-5k', label: 'R$2k – R$5k', min: 2001, max: 5000 },
  { id: 'above-5k', label: 'Acima de R$5k', min: 5001 },
] as const

const CATEGORY_LABELS: Record<string, string> = {
  'sim-racing': '🏎️ Sim Racing',
  'outros': '📦 Outros',
}

function matchesPriceRange(price: number, rangeId: string): boolean {
  const range = PRICE_RANGES.find(r => r.id === rangeId)
  if (!range || range.id === 'todos') return true
  const min = 'min' in range ? range.min : undefined
  const max = 'max' in range ? range.max : undefined
  if (min !== undefined && price < min) return false
  if (max !== undefined && price > max) return false
  return true
}

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format

export default function FilteredGrid({ items }: { items: LojinhaItem[] }) {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [activePriceRange, setActivePriceRange] = useState('todos')
  const [showSold, setShowSold] = useState(false)

  const categories = useMemo(
    () => [...new Set(items.map(i => i.category))],
    [items]
  )

  const filtered = useMemo(() => {
    return items.filter(item => {
      if (!showSold && item.sold) return false
      if (activeCategory !== 'todos' && item.category !== activeCategory) return false
      if (!matchesPriceRange(item.price, activePriceRange)) return false
      return true
    })
  }, [items, activeCategory, activePriceRange, showSold])

  const availableCount = items.filter(i => !i.sold).length

  return (
    <div>
      <div className={styles.filters}>
        {categories.length > 1 && (
          <div className={styles.filter_row}>
            <span className={styles.filter_label}>Categoria</span>
            <div className={styles.chips}>
              <button
                className={`${styles.chip} ${activeCategory === 'todos' ? styles['chip--active'] : ''}`}
                onClick={() => setActiveCategory('todos')}
              >
                Todos
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.chip} ${activeCategory === cat ? styles['chip--active'] : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {CATEGORY_LABELS[cat] ?? cat}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={styles.filter_row}>
          <span className={styles.filter_label}>Preço</span>
          <div className={styles.chips}>
            {PRICE_RANGES.map(range => (
              <button
                key={range.id}
                className={`${styles.chip} ${activePriceRange === range.id ? styles['chip--active'] : ''}`}
                onClick={() => setActivePriceRange(range.id)}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filter_row}>
          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={showSold}
              onChange={e => setShowSold(e.target.checked)}
              className={styles.toggle__input}
            />
            <span className={styles.toggle__track}>
              <span className={styles.toggle__thumb} />
            </span>
            <span className={styles.toggle__label}>Mostrar vendidos</span>
          </label>
        </div>
      </div>

      <div className={styles.meta}>
        <span className={styles.meta__count}>
          {filtered.filter(i => !i.sold).length} disponíveis
          {showSold && filtered.some(i => i.sold) && (
            <span className={styles.meta__sold}> · {filtered.filter(i => i.sold).length} vendidos</span>
          )}
        </span>
        <span className={styles.meta__total}>{availableCount} no total</span>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.empty__icon}>🔍</span>
          <p className={styles.empty__text}>Nenhum item com esses filtros.</p>
          <button
            className={styles.empty__reset}
            onClick={() => { setActiveCategory('todos'); setActivePriceRange('todos') }}
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <ul className={styles.grid}>
          {filtered.map(item => (
            <li
              key={item.id}
              className={`${styles.card} ${item.sold ? styles['card--sold'] : ''}`}
            >
              <div className={styles.card__image}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                  className={styles['card__image-img']}
                />
                {item.sold && (
                  <div className={styles.card__sold_overlay}>
                    <span>Vendido</span>
                  </div>
                )}
                {item.category === 'sim-racing' && !item.sold && (
                  <span className={styles.card__badge}>Sim Racing</span>
                )}
              </div>

              <div className={styles.card__body}>
                <div>
                  <h3 className={styles.card__name}>{item.name}</h3>
                  {item.subtitle && (
                    <p className={styles.card__subtitle}>{item.subtitle}</p>
                  )}
                </div>

                {item.description && (
                  <p className={styles.card__desc}>{item.description}</p>
                )}

                <p className={`${styles.card__price} ${item.sold ? styles['card__price--sold'] : ''}`}>
                  {item.priceLabel}
                </p>

                {!item.sold && (item.mlLink || item.olxLink) && (
                  <div className={styles.card__marketplaces}>
                    {item.mlLink && (
                      <a
                        href={item.mlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card__mp_link}
                      >
                        MercadoLivre
                      </a>
                    )}
                    {item.olxLink && (
                      <a
                        href={item.olxLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card__mp_link}
                      >
                        OLX
                      </a>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
