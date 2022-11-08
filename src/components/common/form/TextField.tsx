import React, { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'

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
      {error != null && <div className="mb-2 text-center">{error}</div>}
    </label>
  </>
)

export default TextField
