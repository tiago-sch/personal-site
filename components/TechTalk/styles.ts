import styled, { css } from 'styled-components'
import Container from '../../styles/Container'

export const TechTalkContainer = styled(Container)`
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`

export const TechTalkHeader = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const TechTalkImageHolder = styled.div`
  width: 250px;
  height: calc(.75 * 250px);
  max-width: 100%;
  position: relative;
  margin: auto auto 16px;
  
  ${({ theme }) => theme.mixins.breakpoint('md')} {
    margin-bottom: 0;
    width: 350px;
    height: calc(.75 * 350px);
  }
`

export const TechTalkHeaderContent = styled.div`
  object-fit: contain;
  flex-basis: 100%;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    flex-basis: 60%;
  }
`

export const TechTalkTitle = styled.h2`
  ${({ theme }) => theme.mixins.typography('title2', 'bold')}
  text-align: center;
  margin-bottom: 8px;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    text-align: left;
    margin-bottom: 32px;
  }
`

type TechTalkTextProps = {
  $center?: Boolean; 
  $compact?: Boolean;
};

export const TechTalkText = styled.p<TechTalkTextProps>`
  ${({ theme }) => theme.mixins.typography('body')}
  ${({ theme }) => theme.doubleLineBreak }

  &+& {
    margin-top: 8px;
  }

  ${({ $center, theme }) => $center && css`
    ${theme.mixins.breakpoint('md')} {
      text-align: center;
    }
  `}

  ${({ $compact, theme }) => $compact && css`
    ${theme.mixins.breakpoint('lg')} {
      max-width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  `}
`
