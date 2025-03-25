import styled from 'styled-components'
import Image from 'next/image'

export const ListWrapper = styled.div`
  padding: 58px 0 42px;

  & + & {
    border-top: 2px solid ${({ theme }) => theme.colors.purple2};
  }

  ${({ theme }) => theme.mixins.breakpoint('lg')} {
    display: flex;
  }
`

export const ListTitle = styled.h3`
  ${({ theme }) => theme.mixins.typography('title3', 'bold')};
  text-align: center;
  margin-bottom: 24px;

  ${({ theme }) => theme.mixins.breakpoint('lg')} {
    text-align: left;
    flex-basis: 300px;
  }
  ${({ theme }) => theme.mixins.breakpoint('xl')} {
    flex-basis: 350px;
  }
`

export const IconList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    justify-content: space-between;
    flex-grow: 1;
  }
`

export const IconItem = styled.li`
  text-align: center;
  flex-basis: calc(50% - 16px);
  margin-bottom: 16px;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    flex-basis: calc(25% - 16px);
  }
`

export const IconHolder = styled.div`
  margin: 0 auto;
  max-width: 80px;

  ${({ theme }) => theme.mixins.breakpoint('md')} {
    max-width: 120px;
  }

  ${({ theme }) => theme.mixins.breakpoint('lg')} {
    max-width: 150px;
  }
`

export const IconTitle = styled.p`
  ${({ theme }) => theme.mixins.typography('body')};
  display: block;
`
