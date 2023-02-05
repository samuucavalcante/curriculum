import { CSSProperties } from 'react'

// #  Layout # //

export type FlexContainerProps = {
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
  direction?: CSSProperties['flexDirection']
  gap?: CSSProperties['gap']
  mt?: CSSProperties['marginTop']
}

export type BoxProps = {
  w?: CSSProperties['width']
  h?: CSSProperties['height']
  bg?: CSSProperties['background']
  maxW?: CSSProperties['maxWidth']
  maxH?: CSSProperties['maxHeight']
  minW?: CSSProperties['minWidth']
  minH?: CSSProperties['minHeight']
}

// #  Text # //

export type TextProps = {
  textColor?: string
  textSize?: number
  fontWeight?: CSSProperties['fontWeight']
  uppercase?: boolean
}
export type TitleProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: React.ReactNode
}

// #  Input # //

export type InputProps = {
  fullWidth?: boolean
}
