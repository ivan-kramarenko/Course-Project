import React, { ReactElement, useState, useEffect } from 'react'

interface SearchFieldProps {
  handleSearch: (value: string) => void
}

const SearchField = ({ handleSearch }: SearchFieldProps): ReactElement => {
  const [value, setValue] = useState('')
  const handleChange = ({ target }: { target: any }): void => {
    setValue(target.value)
  }
  useEffect(() => {
    handleSearch(value)
  }, [value])
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
