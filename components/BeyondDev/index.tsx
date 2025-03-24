import Image from 'next/image'
import Container from '../../styles/Container'
import ExternalLink from '../ExternalLink'
import SocialBar from '../SocialBar'
import {
  BeyondDevWrapper,
  BeyondDevContent,
  BeyondDevTitle,
  BeyondDevParagraph,
  BeyondDevImageHolder,
  BeyondDevFooterNote,
} from './styles'

const tarsilaUrl = 'https://open.spotify.com/artist/3UJ7HEUS0wxJ5GpfVoyYzP?si=3O4svjqAR0WYk0r_hs_kHw'
const tarsilaLink = <ExternalLink href={tarsilaUrl}>Tarsila</ExternalLink>

const lieUrl = 'https://open.spotify.com/artist/0isGagp4GJj7lmcTv5xwbI?si=5WQj_AbNT9GBQzwox1EgFQ'
const lieLink = <ExternalLink href={lieUrl}>Letters Into Eternity</ExternalLink>

const youtubeUrl= 'https://www.youtube.com/channel/UC3rwmHd3_QSePebtxolkTng'
const youtubeLink = <ExternalLink href={youtubeUrl}>my videos in YouTube</ExternalLink>

const tsouUrl = 'https://www.instagram.com/tsou.painting/'
const tsouLink = <ExternalLink href={tsouUrl}>Tsou Painting</ExternalLink>

const BeyondDev:React.FC = () => {
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
              fill
              style={{
                objectFit: 'contain',
              }}
              loading='lazy'
              alt="A picture of Tiago Schmidt playing bass"
            />
          </BeyondDevImageHolder>
        </BeyondDevContent>
        <SocialBar />
        <BeyondDevFooterNote>
          Proudly built using React, Typescript, NextJS and Styled Components.
        </BeyondDevFooterNote>
      </Container>
    </BeyondDevWrapper>
  )
}

export default BeyondDev
