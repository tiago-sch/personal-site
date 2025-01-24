import styled, { css } from 'styled-components'
import { containerMaxWidths, breakpoint, rem } from './settings/stylesSetup'

const renderBreakpoints = () => {
  let style;

  Object.entries(containerMaxWidths).forEach(([bp, width]) => {
    style += `${breakpoint(bp as keyof typeof containerMaxWidths)} {
      max-width: ${width}px;
    }`
  })

  return css`${style}`
}

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding-right: ${rem(16)};
  padding-left: ${rem(16)};
  margin-right: auto;
  margin-left: auto;

  ${renderBreakpoints()}
`;

export default Container
