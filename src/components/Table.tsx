import React, { ReactElement } from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import { IGuest, ISortedValue } from '../interfaces/models'

interface TableProps {
  onSort: (value: ISortedValue) => void
  selectedSort: ISortedValue
  columns: any
  guests: IGuest[]
}

const Table = ({
  onSort,
  selectedSort,
  columns,
  guests
}: TableProps): ReactElement => (
  <table className="table table-responsive">
    <TableHeader
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
    />
    <TableBody data={guests} columns={columns} />
  </table>
)

export default Table
