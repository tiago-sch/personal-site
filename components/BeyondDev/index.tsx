import Image from 'next/image'
import Container from '../../styles/Container'
import ExternalLink from '../ExternalLink'
import SocialBar from '../SocialBar'
import { BeyondDevWrapper, BeyondDevContent, BeyondDevTitle, BeyondDevParagraph, BeyondDevImageHolder } from './styles'

const BeyondDev:React.FC = () => {
  const tarsilaUrl = 'https://open.spotify.com/artist/3UJ7HEUS0wxJ5GpfVoyYzP?si=3O4svjqAR0WYk0r_hs_kHw'
  const lieUrl = 'https://open.spotify.com/artist/0isGagp4GJj7lmcTv5xwbI?si=5WQj_AbNT9GBQzwox1EgFQ'
  const youtubeUrl= 'https://www.youtube.com/channel/UC3rwmHd3_QSePebtxolkTng'
  const tsouUrl = 'https://www.instagram.com/tsou.painting/'

  const tarsilaLink = <ExternalLink href={tarsilaUrl}>Tarsila</ExternalLink>
  const lieLink = <ExternalLink href={lieUrl}>Letters Into Eternity</ExternalLink>
  const youtubeLink = <ExternalLink href={youtubeUrl}>my videos in YouTube</ExternalLink>
  const tsouLink = <ExternalLink href={tsouUrl}>Tsou Painting</ExternalLink>

  return (
    <BeyondDevWrapper>
      <Container>
        <BeyondDevTitle>Beyond the developer</BeyondDevTitle>
        <BeyondDevContent>
          <BeyondDevParagraph>
            When I&apos;m not writing code or fixing bugs, normally I will be living
            the life of a musician or a geek/nerd.<br/>

            You are more than welcome to listen to my bands {tarsilaLink} and{' '}
            {lieLink} or even check {youtubeLink}!<br/>

            Also I have a Instagram page called {tsouLink} where I share 3D prints
            and RPG miniature paintings that I do.
          </BeyondDevParagraph>
          <BeyondDevImageHolder>
            <Image
              src='/images/profile-photo.png'
              width={400}
              height={400}
              loading='lazy'
              alt="A picture of Tiago Schmidt playing bass"
            />
          </BeyondDevImageHolder>
        </BeyondDevContent>
        <SocialBar />
      </Container>
    </BeyondDevWrapper>
  )
}

export default BeyondDev
