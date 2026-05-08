'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { SimRacingItem } from '../../../data/simracing'
import styles from './styles.module.scss'

const WHATSAPP = 'https://wa.me/5551991111210'

// ─── Condition badge ──────────────────────────────────────────────────────────

const conditionClass: Record<SimRacingItem['condition'], string> = {
  'Ótimo estado': styles['badge--great'],
  'Bom estado': styles['badge--good'],
  'Precisa de atenção': styles['badge--attention'],
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function Carousel({ photos }: { photos: string[] }) {
  const [idx, setIdx] = useState(0)

  const prev = useCallback(() => setIdx(i => (i - 1 + photos.length) % photos.length), [photos.length])
  const next = useCallback(() => setIdx(i => (i + 1) % photos.length), [photos.length])

  useEffect(() => { setIdx(0) }, [photos])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__frame}>
        <Image
          key={photos[idx]}
          src={photos[idx]}
          alt={`Foto ${idx + 1} de ${photos.length}`}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className={styles.carousel__img}
        />
        {photos.length > 1 && (
          <>
            <button className={`${styles.carousel__arrow} ${styles['carousel__arrow--prev']}`} onClick={prev} aria-label="Foto anterior">‹</button>
            <button className={`${styles.carousel__arrow} ${styles['carousel__arrow--next']}`} onClick={next} aria-label="Próxima foto">›</button>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div className={styles.carousel__dots}>
          {photos.map((_, i) => (
            <button
              key={i}
              className={`${styles.carousel__dot} ${i === idx ? styles['carousel__dot--active'] : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      )}

      {photos.length > 1 && (
        <span className={styles.carousel__counter}>{idx + 1} / {photos.length}</span>
      )}
    </div>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({ item, onClose }: { item: SimRacingItem; onClose: () => void }) {
  const photos = item.photos?.length ? item.photos : item.image ? [item.image] : []

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        <button className={styles.modal__close} onClick={onClose} aria-label="Fechar">✕</button>

        <div className={styles.modal__layout}>
          {/* Left: carousel */}
          <div className={styles.modal__media}>
            {photos.length > 0
              ? <Carousel photos={photos} />
              : (
                <div className={styles.modal__nophoto}>
                  <span>📷</span>
                  <p>Fotos em breve</p>
                </div>
              )
            }
          </div>

          {/* Right: info */}
          <div className={styles.modal__info}>
            <div className={styles.modal__header}>
              <div>
                <h2 className={styles.modal__name}>{item.name}</h2>
                {item.subtitle && <p className={styles.modal__subtitle}>{item.subtitle}</p>}
              </div>
              <div className={styles.modal__badges}>
                {item.sold
                  ? <span className={`${styles.badge} ${styles['badge--sold']}`}>Vendido</span>
                  : <span className={`${styles.badge} ${conditionClass[item.condition]}`}>{item.condition}</span>
                }
              </div>
            </div>

            <p className={styles.modal__desc}>{item.description}</p>

            <ul className={styles.modal__specs}>
              {item.specs.map(s => (
                <li key={s} className={styles.modal__spec}>
                  <span className={styles.modal__spec_dot} />
                  {s}
                </li>
              ))}
            </ul>

            {item.price && (
              <p className={`${styles.modal__price} ${item.sold ? styles['modal__price--sold'] : ''}`}>
                {item.price}
              </p>
            )}

            {!item.sold && (
              <div className={styles.modal__actions}>
                <a
                  href={`${WHATSAPP}?text=Oi Tiago! Vi o seu setup e tenho interesse no ${item.name}!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modal__cta}
                >
                  Tenho interesse
                </a>
                {(item.mlLink || item.olxLink) && (
                  <div className={styles.modal__marketplaces}>
                    {item.mlLink && (
                      <a href={item.mlLink} target="_blank" rel="noopener noreferrer" className={styles.modal__mp_link}>
                        MercadoLivre
                      </a>
                    )}
                    {item.olxLink && (
                      <a href={item.olxLink} target="_blank" rel="noopener noreferrer" className={styles.modal__mp_link}>
                        OLX
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ItemCard({ item, onOpen }: { item: SimRacingItem; onOpen: () => void }) {
  const photos = item.photos?.length ? item.photos : item.image ? [item.image] : []

  return (
    <article
      className={`${styles.card} ${item.highlight ? styles['card--highlight'] : ''} ${item.sold ? styles['card--sold'] : ''}`}
      id={item.id}
    >
      {photos.length > 0 ? (
        <div className={styles.card__image}>
          <Image
            src={photos[0]}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={styles['card__image-img']}
          />
          {item.sold && <div className={styles.card__sold_overlay}>Vendido</div>}
          {photos.length > 1 && (
            <span className={styles.card__photo_count}>📷 {photos.length}</span>
          )}
        </div>
      ) : (
        <div className={styles.card__placeholder}>
          <span>📷</span>
          <span>Foto em breve</span>
        </div>
      )}

      <div className={styles.card__body}>
        <div className={styles.card__header}>
          <div>
            <h3 className={styles.card__name}>{item.name}</h3>
            {item.subtitle && <p className={styles.card__subtitle}>{item.subtitle}</p>}
          </div>
          {item.sold
            ? <span className={`${styles.badge} ${styles['badge--sold']}`}>Vendido</span>
            : <span className={`${styles.badge} ${conditionClass[item.condition]}`}>{item.condition}</span>
          }
        </div>

        {item.price && (
          <p className={`${styles.card__price} ${item.sold ? styles['card__price--sold'] : ''}`}>{item.price}</p>
        )}

        {!item.sold && (item.mlLink || item.olxLink) && (
          <div className={styles.card__marketplaces}>
            {item.mlLink && (
              <a href={item.mlLink} target="_blank" rel="noopener noreferrer" className={styles.card__mp_link} onClick={e => e.stopPropagation()}>
                MercadoLivre
              </a>
            )}
            {item.olxLink && (
              <a href={item.olxLink} target="_blank" rel="noopener noreferrer" className={styles.card__mp_link} onClick={e => e.stopPropagation()}>
                OLX
              </a>
            )}
          </div>
        )}

        <button className={styles.card__details_btn} onClick={onOpen}>
          Ver detalhes
        </button>
      </div>
    </article>
  )
}

// ─── Grid ─────────────────────────────────────────────────────────────────────

interface Category {
  id: string
  label: string
  icon: string
  ids: string[]
}

export default function SimRacingGrid({ items, categories }: { items: SimRacingItem[]; categories: Category[] }) {
  const [activeItem, setActiveItem] = useState<SimRacingItem | null>(null)
  const itemMap = Object.fromEntries(items.map(i => [i.id, i]))

  return (
    <>
      {categories.map(cat => (
        <div key={cat.id} className={styles.category}>
          <h2 className={styles.category__heading}>
            <span className={styles.category__icon}>{cat.icon}</span>
            {cat.label}
          </h2>
          <div className={styles.category__grid}>
            {cat.ids.map(id => itemMap[id] && (
              <ItemCard key={id} item={itemMap[id]} onOpen={() => setActiveItem(itemMap[id])} />
            ))}
          </div>
        </div>
      ))}

      {activeItem && (
        <Modal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  )
}
