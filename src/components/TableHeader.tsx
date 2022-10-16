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
      onSort({ path: value, order: 'desc' })
    } else {
      onSort({ path: value, order: 'asc' })
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
              columns[column].path !== undefined
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{
              role: columns[column].path !== undefined ? 'button' : undefined
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