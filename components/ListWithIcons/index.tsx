import { useMemo } from 'react';
import Image from 'next/image'
import {
  ListWrapper,
  ListTitle,
  IconList,
  IconItem,
  IconHolder,
  IconTitle
} from './styles'

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
      <IconItem key={`${title}--${item.name}`}>
        <IconHolder>
          <Image
            src={`/images/${item.icon}`}
            alt={`${item.name} logo image`}
            layout='intrinsic'
            width={100}
            height={100}
            loading='lazy'
          />
        </IconHolder>
        <IconTitle>
          {item.name}
        </IconTitle>
      </IconItem>
    ))
  }, [title, items]);

  return (
    <ListWrapper>
      <ListTitle>{title}</ListTitle>
      <IconList>
        {memoizedMap}
      </IconList>
    </ListWrapper>
  )
}

export default ListWithIcons
