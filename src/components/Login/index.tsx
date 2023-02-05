import { Card } from 'components/Card'
import { FormLogin, OnSubmitFormLogin } from 'components/Forms/FormLogin'
import { FormRegister } from 'components/Forms/FormRegister'
import { useCallback, useMemo, useState } from 'react'

export const Login = () => {
  const [step, setStep] = useState<'register' | 'login'>('login')

  const onSubmitLogin = useCallback<OnSubmitFormLogin>((data) => {
    alert(JSON.stringify(data))
  }, [])

  const onChangeStep = useCallback(() => {
    setStep((old) => (old === 'login' ? 'register' : 'login'))
  }, [])

  const onSubmitRegister = useCallback<OnSubmitFormLogin>((data) => {
    alert(JSON.stringify(data))
  }, [])

  const title = useMemo(() => (step === 'login' ? 'Login' : 'Registro'), [step])

  return (
    <Card maxW='500px' w='90vw' title={title} textAlign='center'>
      {step === 'login' ? (
        <FormLogin onClickRegister={onChangeStep} onSubmit={onSubmitLogin} />
      ) : (
        <FormRegister onClickRegister={onChangeStep} onSubmit={onSubmitRegister} />
      )}
    </Card>
  )
}
