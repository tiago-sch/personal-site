import Image from "next/image";
import styles from "./styles.module.scss";

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format

const StoreList = ({ items }) => {
  return (
    <ul className={styles["store-list"]}>
      {items.map(item => (
        <li key={`item-${item.slug}`} className={styles["store-list__item"]}>
          <div className={styles["store-list__pic-holder"]}>
            <Image src={item.pic} alt={item.name} fill className={styles["store-list__pic"]} sizes="60vw"/>
          </div>
          <h2 className={styles["store-list__item-name"]}>
            {item.name}
          </h2>
          <p className={styles["store-list__item-price"]}>{formatter(item.value)}</p>
          <div className={styles["store-list__item-desc-holder"]}>
            <p className={styles["store-list__item-desc"]}>
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default StoreList;
