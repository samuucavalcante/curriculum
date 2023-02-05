import styled from 'styled-components'
import type { TextProps } from './types'

export const Text = styled.span<TextProps>`
  font-size: ${({ textSize = 1.4 }) => `${textSize}rem`};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor, theme }) => textColor || theme.colors.text};
`

export const Title = styled.h2<TextProps>`
  font-size: ${({ textSize = 2.5 }) => `${textSize}rem`};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor, theme }) => textColor || theme.colors.text};
`
