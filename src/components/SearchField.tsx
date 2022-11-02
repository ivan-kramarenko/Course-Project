import React, { ReactElement, useState } from 'react'

// interface SearchFieldProps {}

const SearchField = (): // {}: SearchFieldProps
ReactElement => {
  const [value, setValue] = useState('')
  const handleChange = ({ target }: { target: any }): void => {
    setValue(target.value)
  }
  return (
    <label htmlFor="search">
      Search guest
      <input
        id="search"
        name="search"
        value={value}
        onChange={(e) => handleChange(e)}
        className="form-control"
      />
    </label>
  )
}

export default SearchField
