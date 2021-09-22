import Image from 'next/image'
import styled, { css } from 'styled-components'
import Container from '../../styles/Container'

export const BannerWrapper = styled.header`
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.purple2 };
  border-bottom: 2px solid ${({ theme }) => theme.colors.violetRyb };
  ${({ theme: { colors }}) => css`
    background-image:
      radial-gradient(circle at bottom center, ${colors.purpureus}, ${colors.blueVioletColorWheel2}),
      repeating-radial-gradient(circle at center center, ${colors.purpureus}, ${colors.purpureus}, 10px, transparent 20px, transparent 10px);
  `}
`;

export const BannerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }

  ${({theme}) => theme.mixins.breakpoint('md')} {
    flex-direction: row;
    justify-content: space-between;
    min-height: 450px;
  }

  ${({theme}) => theme.mixins.breakpoint('lg')} {
    min-height: 650px;
  }
`

export const ContentHolder = styled.div`
  flex-basis: 100%;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    flex-basis: 50%;
  }

  ${({ theme }) => theme.mixins.breakpoint('lg')} {
    flex-basis: 60%;
  }

  ${({ theme }) => theme.mixins.breakpoint('xl')} {
    flex-basis: 50%;
  }

  ${({ theme }) => theme.mixins.breakpoint('wd')} {
    flex-basis: 60%;
  }
`

export const BannerTitle = styled.h1`
  text-align: center;
  text-shadow: 5px 5px 10px ${({ theme }) => theme.colors.blueVioletColorWheel2};
  margin-bottom: 16px;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    margin-bottom: 0;
    text-align: left;
  }
`

export const BannerSubtitle = styled.p`
  text-align: center;
  text-shadow: 5px 5px 10px ${({ theme }) => theme.colors.blueVioletColorWheel2};
  ${({ theme }) => theme.mixins.typography('title3')}

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    text-align: left;
  }
`

export const ImageHolder = styled.div`
  flex-basis: 100%;
  min-width: 300px;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    flex-basis: 35%;
  }
`

export const BannerImage = styled(Image)`
  width: 350px;
  height: auto;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    animation: float 6s ease-in-out infinite;
  }
`
