import { createGlobalStyle } from 'styled-components'
import StylesReset from './StylesReset'
import { importFonts, bodyBaseSize } from './settings/stylesSetup'

const GlobalStyles = createGlobalStyle`
  /* ${StylesReset} */
  ${importFonts()}

  *, html, body {
    font-family: 'Rubik', sans-serif;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.mixins.rem(bodyBaseSize)};
    color: ${({ theme }) => theme.colors.lightGray};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${({ theme }) => theme.colors.blueVioletColorWheel2};
  }

  h1 {
    ${({ theme }) => theme.mixins.typography('title1', 'bold')}
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(15px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`

export default GlobalStyles
