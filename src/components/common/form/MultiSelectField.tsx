import React, { ReactElement } from 'react'
import Select from 'react-select'
import ErrorField from './ErrorField'

interface MultiSelectFieldProps {
  label: string
  items: object
  id: string
  onChange: (...event: any[]) => void
  value: any
  error: string | undefined
}

const MultiSelectField = ({
  label,
  items,
  id,
  onChange,
  value,
  error
}: MultiSelectFieldProps): ReactElement => {
  const itemsArray = Object.entries(items).map((item) => ({
    value: item[0],
    label: item[1].name
  }))
  return (
    <>
      <label htmlFor={id} className="w-100">
        {label}
        <Select
          className="w-100"
          isMulti
          options={itemsArray}
          onChange={onChange}
          value={value}
        />
        <ErrorField {...{ error }} />
      </label>
    </>
  )
}

export default MultiSelectField
