import React, { ReactElement, useState } from 'react'

// interface SearchFieldProps {}

const SearchField = (): // {}: SearchFieldProps
ReactElement => {
  const [value, setValue] = useState('')
  const handleChange = ({ target }: { target: any }): void => {
    setValue(target.value)
  }
  return (
    <input
      id="search"
      name="search"
      placeholder="Search guests"
      value={value}
      onChange={(e) => handleChange(e)}
      className="form-control"
    />
  )
}

export default SearchField
