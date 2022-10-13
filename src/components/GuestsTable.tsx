import React, { ReactElement } from 'react'
import { IGuest } from '../interfaces/models'
import Guest from './Guest'

interface GuestsTableProps {
  guests: IGuest[]
  removeGuest: (filteredId: string) => void
  switchBookmark: (elemId: string) => void
  onSort: (value: string) => void
}

const GuestsTable = ({
  guests,
  removeGuest,
  switchBookmark,
  onSort
}: GuestsTableProps): ReactElement => (
  <table className="table table-responsive">
    <thead>
      <tr>
        <th onClick={() => onSort('name')} scope="col">
          Имя
        </th>
        <th scope="col">Качества</th>
        <th onClick={() => onSort('profession.name')} scope="col">
          Профессия
        </th>
        <th onClick={() => onSort('completedMeetings')} scope="col">
          Встретился, раз
        </th>
        <th onClick={() => onSort('rate')} scope="col">
          Оценка
        </th>
        <th onClick={() => onSort('bookmark')} scope="col">
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

export default GuestsTable
