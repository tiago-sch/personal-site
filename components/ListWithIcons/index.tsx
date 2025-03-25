import { useMemo } from 'react';
import Image from 'next/image'
import styles from './styles.module.scss';

interface ListItem {
  name: string
  icon: string
}

interface ListWithIconProp {
  title: string
  items: ListItem[]
}

const ListWithIcons: React.FC<ListWithIconProp> = ({ title, items }) => {
  const memoizedMap = useMemo(() => {
    return items.map(item => (
      <li className={styles["icon-list__list-item"]} key={`${title}--${item.name}`}>
        <div className={styles["icon-list__icon-holder"]}>
          <Image
            src={`/images/${item.icon}`}
            alt={`${item.name} logo image`}
            width={100}
            height={100}
            loading='lazy'
          />
        </div>
        <p className={styles["icon-list__icon-title"]}>
          {item.name}
        </p>
      </li>
    ))
  }, [title, items]);

  return (
    <div className={styles["icon-list"]}>
      <h3 className={styles["icon-list__title"]}>{title}</h3>
      <ul className={styles["icon-list__list"]}>
        {memoizedMap}
      </ul>
    </div>
  )
}

export default ListWithIcons
