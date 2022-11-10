import React, { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'
import ErrorField from './ErrorField'

interface TextFieldProps {
  label: string
  id: string
  type: string
  error: string | undefined
  register: UseFormRegister<any>
}

const TextField = ({
  label,
  id,
  type,
  register,
  error
}: TextFieldProps): ReactElement => {
  const setClassNames = (): string => {
    const isInvalid = error != null ? 'is-invalid' : ''
    const classNames = ['form-control', isInvalid]
    return classNames.join(' ')
  }
  return (
    <>
      <label htmlFor={id} className="w-100">
        {label}
        <input
          className={setClassNames()}
          id={id}
          type={type}
          {...register(id)}
        />
        <ErrorField {...{ error }} />
      </label>
    </>
  )
}

export default TextField
