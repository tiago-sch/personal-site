import styled from 'styled-components'

export const BeyondDevWrapper = styled.section`
  padding: 48px 0;
`

export const BeyondDevContent = styled.div`
  ${({ theme }) => theme.mixins.breakpoint('md')} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const BeyondDevTitle = styled.h2`
  ${({ theme }) => theme.mixins.typography('title2', 'bold')}
  text-align: center;
  margin-bottom: 24px;
`

export const BeyondDevParagraph = styled.p`
  ${({ theme }) => theme.mixins.typography('body')}
  ${({ theme }) => theme.doubleLineBreak}

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    max-width: 50%;
  }
`

export const BeyondDevImageHolder = styled.div`
  text-align: center;
`
