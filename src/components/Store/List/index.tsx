import Image from "next/image";
import styles from "./styles.module.scss";

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format

interface StoreItem {
  name: string
  slug: string
  value: number
  description: string
  pic: string
  sold: boolean
}

const StoreList = ({ items }: { items: StoreItem[] }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li
          key={`item-${item.slug}`}
          className={`${styles.card} ${item.sold ? styles['card--sold'] : ''}`}
        >
          <div className={styles.card__image}>
            <Image
              src={item.pic}
              alt={item.name}
              fill
              className={styles['card__image-img']}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            />
            {item.sold && (
              <div className={styles.card__sold}>
                <span>Vendido</span>
              </div>
            )}
          </div>

          <div className={styles.card__body}>
            <h2 className={styles.card__name}>{item.name}</h2>
            <p className={styles.card__price}>{formatter(item.value)}</p>
            {item.description && (
              <p className={styles.card__desc}>{item.description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default StoreList;
