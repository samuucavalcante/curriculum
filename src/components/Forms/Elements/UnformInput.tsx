import { Box, Input, Text } from 'components/Common'
import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { useTheme } from 'styled-components'

type Props = {
  name: string
  type: InputHTMLAttributes<HTMLInputElement>['type']
}

export const UnformInput: React.FC<Props> = ({ name, type }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const theme = useTheme()
  const { registerField, fieldName, error, defaultValue, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current?.value,
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      <Input
        onFocus={clearError}
        fullWidth
        defaultValue={defaultValue}
        ref={inputRef}
        type={type}
      />
      <Box h='2px'>
        {error && (
          <Text textSize={0.9} textColor={theme.colors.error}>
            {error}
          </Text>
        )}
      </Box>
    </>
  )
}
