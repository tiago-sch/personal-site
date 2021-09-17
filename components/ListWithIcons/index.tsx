import { useMemo } from 'react';
import Image from 'next/image'
import classnames from 'classnames/bind'
import styles from './styles.module.scss'

const cn = classnames.bind(styles)

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
      <li key={`${title}--${item.name}`} className={cn('icon-list__item')}>
        <div className={cn('icon-list__icon-holder')}>
          <Image
            src={`/images/${item.icon}`}
            alt={`${item.name} logo image`}
            layout='intrinsic'
            width={100}
            height={100}
            loading='lazy'
            className={cn('icon-list__icon')}
          />
        </div>
        <p className={cn('icon-list__icon-name')}>
          {item.name}
        </p>
      </li>
    ))
  }, [title, items]);

  return (
    <div className={cn('icon-list')}>
      <h3 className={cn('icon-list__title')}>{title}</h3>
      <ul className={cn('icon-list__list')}>
        {memoizedMap}
      </ul>
    </div>
  )
}

export default ListWithIcons
