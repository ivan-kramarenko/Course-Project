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
}: TextFieldProps): ReactElement => (
  <>
    <label htmlFor={id} className="w-100">
      {label}
      <input className="form-control" id={id} type={type} {...register(id)} />
      <ErrorField {...{ error }} />
    </label>
  </>
)

export default TextField
