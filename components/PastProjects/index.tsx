import { useMemo } from 'react';
import Image from 'next/image'
import ExternalLink from '../ExternalLink'
import classnames from 'classnames/bind'
import styles from './styles.module.scss'

const cn = classnames.bind(styles)

const imageFolder = '/images/portfolio/'
const projects = [
  {
    image: `${imageFolder}alamo.jpg`,
    name: 'Alamo Rent a Car',
    link: 'https://www.alamo.com/en/home.html'
  },
  {
    image: `${imageFolder}baker-hughes.jpg`,
    name: 'Baker Hughes',
    link: 'https://www.bakerhughes.com/'
  },
  {
    image: `${imageFolder}muambator.jpg`,
    name: 'Muambator',
    link: 'https://www.muambator.com.br/'
  },
  {
    image: `${imageFolder}perestroika.jpg`,
    name: 'Perestroika',
    link: 'https://www.perestroika.com.br/'
  }
]

const PastProjects:React.FC = () => {
  const memoizedMap = useMemo(() => {
    return projects.map(({image, name, link}) => (
      <div className={cn('past-projects__item')} key={`past-project-${name}`}>
        <Image
          src={image}
          alt={`Screenshot of ${name}'s website`}
          layout='intrinsic'
          width={252}
          height={145.5}
          loading='lazy'
          className={cn('past-projects__item-screenshot')}
        />
        <ExternalLink href={link} className={cn('past-projects__item-title')}>
          {name}
        </ExternalLink>
      </div>
    ))
  }, []);

  return (
    <section className={cn('past-projects')}>
      <div className='container'>
        <h2 className={cn('past-projects__title')}>Past projects</h2>
        <p className={cn('past-projects__subtitle')}>
          These are some of the projects I had the pleasure to work
          with in the past:
        </p>

        <div className={cn('past-projects__list')}>
          {memoizedMap}
        </div>
      </div>
    </section>
  )
}

export default PastProjects
