import React, { ReactElement, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../ui/form/LoginForm'
import RegisterForm from '../ui/form/RegisterForm'

const AuthPage = (): ReactElement => {
  const { type } = useParams()
  const [formType, setFormType] = useState(type === 'register' ? type : 'login')
  const toggleFormType = (): void => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    )
  }
  return (
    <>
      {formType === 'register' ? (
        <>
          <RegisterForm />
          <p>
            Already have account?
            <button type="button" onClick={toggleFormType}>
              Sign in
            </button>
          </p>
        </>
      ) : (
        <>
          <LoginForm />
          <p>
            Not have account?
            <button type="button" onClick={toggleFormType}>
              Sign up
            </button>
          </p>
        </>
      )}
    </>
  )
}

export default AuthPage
