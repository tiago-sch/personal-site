import { useMemo } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ExternalLink from '../ExternalLink';

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
      <li className={styles["projects__list-item"]} key={`past-project-${name}`}>
        <Image
          src={image}
          alt={`Screenshot of ${name}'s website`}
          width={252}
          height={145.5}
          loading='lazy'
          className={styles["projects__image"]}
        />
        <ExternalLink className={styles["projects__item-project-name"]} href={link}>
          {name}
        </ExternalLink>
      </li>
    ))
  }, []);

  return (
    <section className={styles["projects"]}>
      <div className='container'>
        <h2 className={styles["projects__title"]}>Past projects</h2>
        <p className={styles["projects__text"]}>
          These are some of the projects I had the pleasure to work
          with in the past:
        </p>

        <ul className={styles["projects__list"]}>
          {memoizedMap}
        </ul>
      </div>
    </section>
  )
}

export default PastProjects
