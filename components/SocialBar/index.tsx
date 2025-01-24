import { useMemo } from 'react';
import Image from 'next/image'
import { SocialWrapper, SocialItem } from './styles'

const iconDir = '/images/social/'
const icons = [
  {
    title: 'E-mail',
    icon: `${iconDir}envelope.svg`,
    link: 'mailto:tiagohammett@gmail.com'
  },
  {
    title: 'LinkedIn',
    icon: `${iconDir}linkedin.svg`,
    link: 'https://www.linkedin.com/in/t-schmidt/'
  },
  {
    title: 'GitHub',
    icon: `${iconDir}github.svg`,
    link: 'https://github.com/tiago-sch/'
  },
  {
    title: 'Instagram',
    icon: `${iconDir}instagram.svg`,
    link: 'https://www.instagram.com/tiago.sch/'
  },
  {
    title: 'YouTube',
    icon: `${iconDir}youtube.svg`,
    link: 'https://www.youtube.com/channel/UC3rwmHd3_QSePebtxolkTng'
  },
];

const SocialBar:React.FC  = () => {
  const memoizedMap = useMemo(() => {
    return icons.map(({ title, icon, link }) => (
      <SocialItem
        href={link}
        title={title}
        key={`social-icon-${title}`}
      >
        <Image
          src={icon}
          width={50}
          height={50}
          loading='lazy'
          alt={`${title} icon`}
        />
      </SocialItem>
    )
  )}, []);

  return (
    <SocialWrapper>
      {memoizedMap}
    </SocialWrapper>
  )
}

export default SocialBar
