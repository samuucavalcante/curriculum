import { Card } from 'components/Card'
import { FormLogin, OnSubmitFormLogin } from 'components/Forms/FormLogin'
import { FormRegister } from 'components/Forms/FormRegister'
import { useCallback, useState } from 'react'

export const Login = () => {
  const [step, setStep] = useState<'register' | 'login'>('login')

  const onSubmit = useCallback<OnSubmitFormLogin>((data) => {
    alert(JSON.stringify(data))
  }, [])

  const onChangeStep = useCallback(() => {
    setStep((old) => (old === 'login' ? 'register' : 'login'))
  }, [])

  return (
    <Card maxW='500px' w='90vw' title='Login' textAlign='center'>
      {step === 'login' ? (
        <FormLogin onClickRegister={onChangeStep} onSubmit={onSubmit} />
      ) : (
        <FormRegister onClickRegister={onChangeStep} />
      )}
    </Card>
  )
}
