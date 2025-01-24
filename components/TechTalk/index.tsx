import Image from 'next/image'
import ListWithIcons from '../ListWithIcons'
import ExternalLink from '../ExternalLink'
import {
  TechTalkContainer,
  TechTalkHeader,
  TechTalkImageHolder,
  TechTalkHeaderContent,
  TechTalkTitle,
  TechTalkText
} from './styles'

const TechTalk: React.FC = () => {
  const illustrationWidth = 350

  const languages = {
    title: 'Languages',
    items: [
      { name: 'HTML 5', icon: 'tech/html5.png' },
      { name: 'CSS 3', icon: 'tech/css3.png' },
      { name: 'SASS/SCSS', icon: 'tech/sass.png' },
      { name: 'JavaScript ES6 ', icon: 'tech/javascript.png' },
      { name: 'TypeScript', icon: 'tech/typescript.png' },
      { name: 'Python', icon: 'tech/python.png' },
      { name: 'PHP', icon: 'tech/php.png' },
      { name: 'SQL', icon: 'tech/sql.png' }
    ]
  }

  const frameworks = {
    title: 'Frameworks  & Tools',
    items: [
      { name: 'React', icon: 'tech/react.png' },
      { name: 'Node', icon: 'tech/node.png' },
      { name: 'Jest', icon: 'tech/jest.png' },
      { name: 'Next JS', icon: 'tech/next.png' },
      { name: 'Webpack', icon: 'tech/webpack.png' },
      { name: 'Tailwind', icon: 'tech/tailwind.png' },
      { name: 'Laravel', icon: 'tech/laravel.png' },
      { name: 'Django', icon: 'tech/django.png' }
    ]
  }

  const stackoverflowDevSurveyLink = 'https://www.freecodecamp.org/news/stack-overflow-developer-survey-2020-programming-language-framework-salary-data/'
  const getBEMLink = 'http://getbem.com/introduction/'
  const functionlStylingLink = 'https://rangle.io/blog/styling-with-functional-css/'

  return (
    <TechTalkContainer as={'section'}>

      <TechTalkHeader>
        <TechTalkImageHolder>
          <Image
            src="/images/mirage-start-up-launch.png"
            alt="Illustration of a computer wtih a hourglass in the screen, the World Wide Web icon in the background and a rocket flying with a speech bubble"
            width={illustrationWidth}
            height={illustrationWidth * 0.75}
          />
        </TechTalkImageHolder>

        <TechTalkHeaderContent>
          <TechTalkTitle>Tech talk</TechTalkTitle>
          <TechTalkText>
            Over the years I had the pleasure to work in a wide range of projects,
            from static landing pages to complex web applications. It allowed me
            to work in a wide variety of teams, technologies, frameworks and cultures.
          </TechTalkText>
          <TechTalkText>
            This is a sample of programming languages and frameworks I have experience with:
          </TechTalkText>
        </TechTalkHeaderContent>
      </TechTalkHeader>

      <ListWithIcons {...languages} />
      <ListWithIcons {...frameworks} />

      <div>
        <TechTalkText $center $compact>
          We all know that today the one of the most commonly used
          programming language is{' '}
          <ExternalLink href={stackoverflowDevSurveyLink}>
            JavaScript
          </ExternalLink>{' '}
          but in my opinion a good styling architecture is also crucial
          for a good user experience and overall performance.

          <br/>

          With that in mind I always prefer using a responsive mobile-first approach
          for styling using <ExternalLink href={getBEMLink}>BEM</ExternalLink>{' '}
          and <ExternalLink href={functionlStylingLink}>functional styling</ExternalLink>{' '}
          methodologies and frameworks like CSS Modules or Styled Components.
        </TechTalkText>
      </div>

    </TechTalkContainer>
  )
};

export default TechTalk
