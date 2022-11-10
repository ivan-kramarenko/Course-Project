import React, { ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { IProfession } from '../../../interfaces'
import ErrorField from './ErrorField'

interface SelectFieldProps {
  label: string
  id: string
  register: UseFormRegister<any>
  items: object | IProfession
  error: string | undefined
}

const SelectField = ({
  label,
  id,
  register,
  items,
  error
}: SelectFieldProps): ReactElement => (
  <>
    <label htmlFor={id} className="w-100">
      {label}
      <select id={id} {...register(id)} className="form-select form-select-sm">
        {Object.entries(items).map((prof: [string, IProfession]) => (
          <option key={prof[0]}>{prof[1].name}</option>
        ))}
      </select>
    </label>
    <ErrorField {...{ error }} />
  </>
)

export default SelectField