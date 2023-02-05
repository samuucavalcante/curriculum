import styled from 'styled-components'
import type { FlexContainerProps, BoxProps } from './types'

export const Box = styled.div<BoxProps>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background: ${({ bg }) => bg};
  max-width: ${({ maxW }) => maxW};
  max-height: ${({ maxH }) => maxH};
  min-width: ${({ minW }) => minW};
  min-height: ${({ minH }) => minH};
`

export const FlexContainer = styled(Box)<FlexContainerProps>`
  display: flex;
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'flex-start' }) => align};
  flex-direction: ${({ direction = 'row' }) => direction};
  gap: ${({ gap }) => `${gap}rem`};
  margin-top: ${({ mt }) => mt};
`
