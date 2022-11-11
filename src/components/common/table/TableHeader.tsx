import React, { ReactElement } from 'react'
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons'
import { ISortedValue } from '../../../interfaces'

interface TableHeaderProps {
  onSort: (value: ISortedValue) => void
  selectedSort: ISortedValue
  columns: any
}

const TableHeader = ({
  onSort,
  selectedSort,
  columns
}: TableHeaderProps): ReactElement => {
  const handleSort = (value: string): void => {
    if (selectedSort.order === 'asc') {
      onSort({ path: value, order: 'desc' })
    } else {
      onSort({ path: value, order: 'asc' })
    }
  }
  const setCaretArrow = (item: ISortedValue): any => {
    const isSame = item.path === selectedSort.path
    if (isSame && selectedSort.order === 'asc') {
      return <CaretDownFill />
    }
    if (isSame && selectedSort.order === 'desc') {
      return <CaretUpFill />
    }
    return ''
  }
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            scope="col"
            onClick={
              columns[column].path !== undefined
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{
              role: columns[column].path !== undefined ? 'button' : undefined
            }}
          >
            {columns[column].name}
            {setCaretArrow(columns[column])}
          </th>
        ))}
      </tr>
    </thead>
  )
}
export default TableHeader
// line 39
