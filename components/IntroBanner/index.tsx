import Image from 'next/image'
import classnames from 'classnames/bind'
import styles from './styles.module.scss'

const cn = classnames.bind(styles)

const IntroBanner: React.FC = () => {
  return (
    <div className={cn('intro-banner')}>
      <div className={cn('container', 'intro-banner__container')}>
        <div>
          <h1 className={cn('intro-banner__title')}>Tiago Schmidt</h1>
          <p className={cn('intro-banner__subtitle')}>Web Developer</p>
        </div>
        <Image
          src="/images/mirage-pale.png"
          alt="Illustration of an astronaut in space"
          layout="fixed"
          width={240}
          height={240}
          className="image"
          role="presentation"
        />
      </div>
    </div>
  )
}

export default IntroBanner;