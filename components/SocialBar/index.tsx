import { useMemo } from 'react';
import Image from 'next/image'
import ExternalLink from '../ExternalLink';

import styles from "./styles.module.scss";

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
      <ExternalLink
        href={link}
        title={title}
        className={styles["social__item"]}
        key={`social-icon-${title}`}
      >
        <Image
          src={icon}
          width={50}
          height={50}
          loading='lazy'
          alt={`${title} icon`}
        />
      </ExternalLink>
    )
  )}, []);

  return (
    <div className={styles.social}>
      {memoizedMap}
    </div>
  )
}

export default SocialBar
