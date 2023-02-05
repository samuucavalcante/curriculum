import { FlexContainer, Text } from 'components/Common'
import styled from 'styled-components'
import { InputProps } from './types'

export const FormGroup = styled(FlexContainer)`
  & + & {
    margin-top: 2rem;
  }
`

export const Label = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Button = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: ${({ theme }) => theme.rounded};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.contrast};
  }
`

export const Input = styled.input<InputProps>`
  padding: 0.8rem;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  outline: none;
  /* border: 0.1rem solid transparent; */
  border: ${({ theme }) => `1px solid ${theme.colors.contrast}`};

  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  transition: all ease 0.2s;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.text}`};
  }
`
