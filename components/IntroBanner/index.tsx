import {
  BannerWrapper,
  BannerContainer,
  ContentHolder,
  BannerTitle,
  BannerSubtitle,
  ImageHolder,
  BannerImage
} from './styles'

const IntroBanner: React.FC = () => {
  return (
    <BannerWrapper>
      <BannerContainer>
        <ContentHolder>
          <BannerTitle>
            Hi! I&apos;m Tiago!
          </BannerTitle>
          <BannerSubtitle>
            I enjoy creating websites that inspire creativity and
            I strive to make the web accessible to everyone.
          </BannerSubtitle>
        </ContentHolder>
        <ImageHolder>
          <BannerImage
            src="/images/mirage-pale.png"
            alt="Illustration of an astronaut in space attached to a rocket with a cable"
            fill
            priority
          />
        </ImageHolder>
      </BannerContainer>
    </BannerWrapper>
  )
}

export default IntroBanner
