import { FlexContainer } from 'components/Common'
import { Login } from 'components/Login'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <FlexContainer justify='center' align='center' w='100%' h='100vh'>
      <Login />
    </FlexContainer>
  )
}
