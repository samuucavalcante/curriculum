import { Button, FormGroup, Label } from 'components/Common/Form'
import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { UnformInput } from './Elements/UnformInput'
import { validateFormData } from 'utils/validation'
import * as Yup from 'yup'

export type FormLoginData = {
  email: string
  password: string
}

export type OnSubmitFormLogin = (data: FormLoginData) => void

type Props = {
  onSubmit?: OnSubmitFormLogin
  onClickRegister?: () => void
}

const validationFormLogin = Yup.object().shape({
  email: Yup.string().email().required('Email é requerido'),
  password: Yup.string().required('Senha é requerida'),
})

export const FormLogin: React.FC<Props> = ({ onSubmit, onClickRegister }) => {
  const formRef = useRef<FormHandles>()

  const onSubmitForm = useCallback(
    async (data: FormLoginData) => {
      const invalid = await validateFormData(validationFormLogin, data, formRef.current)
      if (!invalid) {
        if (onSubmit) onSubmit(data)
      }
    },
    [onSubmit],
  )

  return (
    <Form ref={formRef as React.MutableRefObject<FormHandles>} onSubmit={onSubmitForm}>
      <FormGroup gap={0.5} direction='column'>
        <Label htmlFor='input-email'>Email</Label>
        <UnformInput name='email' type='email' />
      </FormGroup>
      <FormGroup gap={0.5} direction='column'>
        <Label htmlFor='input-password'>Password</Label>
        <UnformInput name='password' type='password' />
      </FormGroup>

      <FormGroup mt={'1rem'} justify='center' gap={1.5}>
        <Button type='submit'>Login</Button>
        <Button type='button' onClick={onClickRegister}>
          Cadastrar
        </Button>
      </FormGroup>
    </Form>
  )
}
