import React, { ReactElement } from 'react'
import { IGuest, ISortedValue } from '../interfaces/models'
import Guest from './Guest'

interface GuestsTableProps {
  guests: IGuest[]
  removeGuest: (filteredId: string) => void
  switchBookmark: (elemId: string) => void
  onSort: (value: ISortedValue) => void
  currentSort: ISortedValue
}

const GuestsTable = ({
  guests,
  removeGuest,
  switchBookmark,
  onSort,
  currentSort
}: GuestsTableProps): ReactElement => {
  const handleSort = (value: string): void => {
    if (currentSort.order === 'asc') {
      onSort({ iter: value, order: 'desc' })
    } else {
      onSort({ iter: value, order: 'asc' })
    }
  }
  return (
    <table className="table table-responsive">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')} scope="col">
            Имя
          </th>
          <th scope="col">Качества</th>
          <th onClick={() => handleSort('profession.name')} scope="col">
            Профессия
          </th>
          <th onClick={() => handleSort('completedMeetings')} scope="col">
            Встретился, раз
          </th>
          <th onClick={() => handleSort('rate')} scope="col">
            Оценка
          </th>
          <th onClick={() => handleSort('bookmark')} scope="col">
            Избранное
          </th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {guests.map((guest: IGuest) => (
          <Guest
            key={guest._id}
            guest={guest}
            removeGuest={removeGuest}
            switchBookmark={switchBookmark}
          />
        ))}
      </tbody>
    </table>
  )
}

export default GuestsTable
