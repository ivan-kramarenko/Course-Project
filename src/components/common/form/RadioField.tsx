import React, { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'
import ErrorField from './ErrorField'

interface RadioFieldProps {
  items: Array<{ name: string; value: string }>
  label: string
  id: string
  error: string | undefined
  register: UseFormRegister<any>
}

const RadioField = ({
  items,
  label,
  id,
  error,
  register
}: RadioFieldProps): ReactElement => (
  <>
    <label htmlFor={id} className="w-100">
      {label}
      <div className="d-flex align-items-center justify-content-around">
        {items.map((item) => (
          <div
            className="d-flex align-items-center"
            key={`${item.name}_${item.value}`}
          >
            <input
              className="form-check-input"
              type="radio"
              {...register(id)}
              id={`${item.name}_${item.value}`}
              value={item.value}
            />
            <label htmlFor={id}>{item.name}</label>
          </div>
        ))}
      </div>
      <ErrorField {...{ error }} />
    </label>
  </>
)

export default RadioField
