import styled from 'styled-components'
import ExternalLink from '../ExternalLink'

export const SocialWrapper = styled.div`
  padding: 48px 0;
  text-align: center;
  max-width: 310px;
  margin: 0 auto;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    max-width: 100%;
  }
`;

export const SocialItem = styled(ExternalLink)`
  display: inline-block;
  margin: 24px;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    margin: 0 24px;
  }
`
