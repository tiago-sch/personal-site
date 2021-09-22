import styled from 'styled-components'
import Image from 'next/image'
import ExternalLink from '../ExternalLink'

export const ProjectsWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.violetRyb};
  padding: 48px 0;
`

export const ProjectsTitle = styled.h2`
  ${({ theme }) => theme.mixins.typography('title2', 'bold')}
  text-align: center;
  color: white;
`

export const ProjectsText = styled.p`
  ${({ theme }) => theme.mixins.typography('body')}
  color: white;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    text-align: center;
  }
`

export const ProjectsList = styled.ul`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
`

export const ProjectItem = styled.li`
  text-align: center;
  flex-basis: 100%;
  padding: 0 8px 24px;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    flex-basis: 50%;
  }

  ${({ theme }) => theme.mixins.breakpoint('lg')} {
    flex-basis: 25%;
    margin-bottom: 0;
  }
`

export const ProjectImage = styled(Image)`
  border-radius: 4px;
`

export const ProjectName = styled(ExternalLink)`
  ${({ theme }) => theme.mixins.typography('body')}
  display: block;
`
