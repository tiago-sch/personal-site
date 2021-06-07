import Image from 'next/image'
import classnames from 'classnames/bind'
import ExternalLink from '../ExternalLink'
import styles from './styles.module.scss'

const cn = classnames.bind(styles)

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
    link: 'https://github.com/schmidtas/'
  },
  {
    title: 'Instagram',
    icon: `${iconDir}instagram.svg`,
    link: 'https://www.instagram.com/tiago.sch/'
  },
  {
    title: 'Facebook',
    icon: `${iconDir}facebook.svg`,
    link: 'https://www.facebook.com/schmidt.tiago/'
  },
  {
    title: 'YouTube',
    icon: `${iconDir}youtube.svg`,
    link: 'https://www.youtube.com/channel/UC3rwmHd3_QSePebtxolkTng'
  },
];

const SocialBar:React.FC  = () => {
  return (
    <div className={cn('social')}>
      {icons.map(({ title, icon, link }) => (
        <ExternalLink
          href={link}
          title={title}
          key={`social-icon-${title}`}
          className={cn('social__item')}
        >
          <Image
            src={icon}
            layout='intrinsic'
            width={50}
            height={50}
          />
        </ExternalLink>
      ))}
    </div>
  )
}

export default SocialBar
