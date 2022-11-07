import React, { ReactElement, useState } from 'react'
import LoginForm from '../ui/form/LoginForm'
import RegisterForm from '../ui/form/RegisterForm'

const AuthPage = (): ReactElement => {
  const [formType, setFormType] = useState('login')
  const toggleFormType = (): void => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    )
  }
  return (
    <>
      {formType === 'register' ? (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <RegisterForm />
          <div className="d-flex align-items-center mt-2">
            <span>Already have account?</span>
            <button
              className="btn btn-sm btn-primary m-1"
              type="button"
              onClick={toggleFormType}
            >
              Sign in
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <LoginForm />
          <div className="d-flex align-items-center mt-2">
            <span>Don&apos;t have account?</span>
            <button
              className="btn btn-sm btn-primary m-1"
              type="button"
              onClick={toggleFormType}
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AuthPage
