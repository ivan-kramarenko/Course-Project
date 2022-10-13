import React, { ReactElement } from 'react'
import { IGuest } from '../interfaces/models'
import Guest from './Guest'

interface GuestsTableProps {
  guests: IGuest[]
  removeGuest: (filteredId: string) => void
  switchBookmark: (elemId: string) => void
}

const GuestsTable = ({
  guests,
  removeGuest,
  switchBookmark
}: GuestsTableProps): ReactElement => (
  <table className="table table-responsive">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Избранное</th>
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
