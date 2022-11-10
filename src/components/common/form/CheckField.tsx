import React, { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'
import ErrorField from './ErrorField'

interface CheckFieldProps {
  label: string
  id: string
  error: string | undefined
  register: UseFormRegister<any>
}

const CheckField = ({
  label,
  id,
  error,
  register
}: CheckFieldProps): ReactElement => (
  <>
    <label htmlFor={id} className="w-100">
      <div className="d-flex align-items-center justify-content-center">
        {label}
        <input
          className="form-check-input mx-1"
          type="checkbox"
          {...register(id)}
          id={id}
        />
      </div>
      <ErrorField {...{ error }} />
    </label>
  </>
)

export default CheckField
