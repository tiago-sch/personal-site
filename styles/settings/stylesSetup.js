import { css } from 'styled-components'

export const breakpoints = {
  sm: 420,
  md: 768,
  lg: 992,
  xl: 1200,
  wd: 1440
}

export const containerMaxWidths = {
  sm: 400,
  md: 720,
  lg: 960,
  xl: 1140,
  wd: 1330
}

export const colors = {
  blush: '#ea698bff',
  fandangoPink: '#d55d92ff',
  mulberryCrayola: '#c05299ff',
  byzantine: '#ac46a1ff',
  purpureus: '#973aa8ff',
  violetRyb: '#822fafff',
  purple: '#6d23b6ff',
  purple2: '#6411adff',
  blueVioletColorWheel: '#571089ff',
  blueVioletColorWheel2: '#47126bff',
  onyx: '#3d3d3dff',
  spanishGray: '#8f8f8fff',
  lightGray: '#d6d6d6ff',
}

const fonts = [
  ['Rubik', '/fonts/Rubik-Regular', 'normal', 'normal'],
  ['Rubik', '/fonts/Rubik-Bold', 'bold', 'normal'],
]

export const bodyBaseSize = 16;
const typographies = {
  title1: {
    xs: 40,
    md: 48,
    lg: 64
  },
  title2: {
    xs: 32,
    md: 40,
    lg: 48
  },
  title3: {
    xs: 18,
    md: 20,
    lg: 28,
  },
  body: {
    xs: bodyBaseSize,
    md: 18
  }
}

export const breakpoint = (bpMin, bpMax) => {
  const min = breakpoints[bpMin];
  const max = breakpoints[bpMax];
  if (!min) return '&';

  return `@media ${!!min && `(min-width: ${min}px)`}${!!max ? ` and (max-width: ${max - 1}px)` : ''}`
}

export const rem = (size = bodyBaseSize) =>
  `${(size/bodyBaseSize)*1}rem`

export const typography = (type = 'body', weight) => {
  const { xs, ...otherBreakpoints } = typographies[type]
  let style = `font-size: ${rem(xs)};`

  if (weight) {
    style += `font-weight: ${weight};`
  }

  Object.entries(otherBreakpoints).forEach(([bp, size]) => {
    style += `${breakpoint(bp)} {
      font-size: ${rem(size)};
    }`
  })

  return css`${style}`;
}

export const importFonts = () => css`
  ${fonts.map(([name, dir, weight, style]) => `
    @font-face {
      font-family: ${name};
      font-weight: ${weight};
      font-style: ${style};
      font-display: swap;
      src: url(${dir} + ".woff2") format('woff2'),
          url(${dir} + ".woff") format('woff'),
          url(${dir} + ".ttf") format('truetype');
    }
  `).join('')}
`
