import React, { CSSProperties } from 'react'
import { Container, Divider } from './styles'
import { FlexContainer, Title } from 'components/Common'
import { BoxProps } from 'components/Common/types'

type Props = BoxProps & {
  title?: string
  textAlign?: CSSProperties['justifyContent']
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({ title, children, textAlign = 'flex-start', ...rest }) => {
  return (
    <Container {...rest}>
      <FlexContainer justify={textAlign}>{title && <Title>{title}</Title>}</FlexContainer>
      <Divider />
      {children}
    </Container>
  )
}
