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
    <label htmlFor={id}>
      {label}
      <input className="form-control" id={id} type={type} {...register(id)} />
    </label>
    {error != null && <div className="mb-2 text-center">{error}</div>}
  </>
)

export default TextField
