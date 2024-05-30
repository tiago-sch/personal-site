import { useMemo } from 'react';
import Container from '../../styles/Container'
import {
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsText,
  ProjectsList,
  ProjectItem,
  ProjectImage,
  ProjectName
} from './styles'

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
      <ProjectItem key={`past-project-${name}`}>
        <ProjectImage
          src={image}
          alt={`Screenshot of ${name}'s website`}
          width={252}
          height={145.5}
          loading='lazy'
        />
        <ProjectName href={link}>
          {name}
        </ProjectName>
      </ProjectItem>
    ))
  }, []);

  return (
    <ProjectsWrapper>
      <Container>
        <ProjectsTitle>Past projects</ProjectsTitle>
        <ProjectsText>
          These are some of the projects I had the pleasure to work
          with in the past:
        </ProjectsText>

        <ProjectsList>
          {memoizedMap}
        </ProjectsList>
      </Container>
    </ProjectsWrapper>
  )
}

export default PastProjects
