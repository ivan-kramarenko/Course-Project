import React, { ReactElement } from 'react'
import { ISortedValue } from '../interfaces/models'

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
      onSort({ iter: value, order: 'desc' })
    } else {
      onSort({ iter: value, order: 'asc' })
    }
  }
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            scope="col"
            onClick={
              columns[column].iter !== undefined
                ? () => handleSort(columns[column].iter)
                : undefined
            }
            {...{
              role: columns[column].iter !== undefined ? 'button' : undefined
            }}
          >
            {columns[column].name}
          </th>
        ))}
      </tr>
    </thead>
  )
}
export default TableHeader
