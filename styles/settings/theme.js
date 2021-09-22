import { css } from 'styled-components'
import {
  breakpoints,
  containerMaxWidths,
  colors,
  breakpoint,
  rem,
  typography
} from './stylesSetup'

const theme = {
  colors,
  breakpoints,
  containerMaxWidths,
  mixins: {
    breakpoint,
    rem,
    typography
  },
  doubleLineBreak: css`
    br {
      content: '';
      display: block;
      margin-bottom: 1em;
    }
  `
}

export default theme
