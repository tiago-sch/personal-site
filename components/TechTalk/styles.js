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
  flex-basis: 100%;
  margin-bottom: 16px;
  text-align: center;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    margin-bottom: 0;
    flex-basis: 350px;
  }
`

export const TechTalkHeaderContent = styled.div`
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

export const TechTalkText = styled.p`
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
