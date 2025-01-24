import styled from 'styled-components'

import { colors } from './settings/stylesSetup';

type TypoProps = {
  $align?: 'center' | 'left' | 'right';
  $color?: keyof typeof colors;
};

export const Title = styled.h1<TypoProps>`
  font-family: 'Rubik', sans-serif;
  ${({ theme }) => theme.mixins.typography('title1', 'bold')}
  color: ${({ theme, $color }) => theme.colors[$color] || theme.colors.lightGray};
  text-align: ${({ $align }) => $align || 'left'};
  text-align: center;
  margin-bottom: 24px;
`;

export const Title2 = styled.h2<TypoProps>`
  ${({ theme }) => theme.mixins.typography('title3', 'normal')}
  color: ${({ theme, $color }) => theme.colors[$color] || theme.colors.lightGray};
  text-align: ${({ $align }) => $align || 'left'};
  text-align: center;
  margin-bottom: 16px;
`;

export const Title3 = styled.h3<TypoProps>`
  ${({ theme }) => theme.mixins.typography('title3', 'normal')}
  color: ${({ theme, $color }) => theme.colors[$color] || theme.colors.lightGray};
  text-align: ${({ $align }) => $align || 'left'};
  text-align: center;
  margin-bottom: 8px;
`;

type ButtonProps = {
  $variant: 'primary' | 'secondary';
}
export const Button = styled.button<ButtonProps>`
  color: ${({ theme }) => theme.colors.mulberryCrayola};
`;
