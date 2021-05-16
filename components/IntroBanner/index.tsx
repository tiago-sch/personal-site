import Image from 'next/image'
import classnames from 'classnames/bind'
import styles from './styles.module.scss'

const cn = classnames.bind(styles)

const IntroBanner: React.FC = () => {
  return (
    <div className={cn('intro-banner')}>
      <div className={cn('container', 'intro-banner__container')}>
        <div className={cn('intro-banner__content-holder')}>
          <h1 className={cn('intro-banner__title')}>Tiago Schmidt</h1>
          <p className={cn('intro-banner__subtitle')}>Web Developer</p>
        </div>
        <div className={cn('intro-banner__image-holder')}>
          <Image
            src="/images/mirage-pale.png"
            alt="Illustration of an astronaut in space attached to a rocket with a cable"
            layout="responsive"
            width={450}
            height={450}
            sizes={'450px, 320px, 300px'}
            className={cn('intro-banner__astronaut')}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default IntroBanner;