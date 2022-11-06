import React, { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { ILoginFormInputs } from '../../../interfaces'

interface TextFieldProps {
  label: string
  id: string
  register: UseFormRegister<ILoginFormInputs>
  error: string | undefined
}

const TextField = ({
  label,
  id,
  register,
  error
}: TextFieldProps): ReactElement => (
  <>
    <label htmlFor={id}>
      {label}
      <input
        className="form-control"
        id={id}
        type={id}
        {
          // @ts-expect-error
          ...register(id)
        }
      />
    </label>
    {error != null && <div className="mb-2 text-center">{error}</div>}
  </>
)

export default TextField
