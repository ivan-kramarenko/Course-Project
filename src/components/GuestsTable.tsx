import React, { ReactElement } from 'react'
import { IGuest, ISortedValue } from '../interfaces/models'
import Guest from './Guest'
import TableHeader from './TableHeader'

interface GuestsTableProps {
  guests: IGuest[]
  removeGuest: (filteredId: string) => void
  switchBookmark: (elemId: string) => void
  onSort: (value: ISortedValue) => void
  selectedSort: ISortedValue
}

const GuestsTable = ({
  guests,
  removeGuest,
  switchBookmark,
  onSort,
  selectedSort
}: GuestsTableProps): ReactElement => {
  const columns = {
    name: { iter: 'name', name: 'Имя' },
    qualities: { name: 'Качества' },
    profession: { iter: 'profession.name', name: 'Профессия' },
    completedMeetings: { iter: 'completedMeetings', name: 'Встретился, раз' },
    rate: { iter: 'rate', name: 'Оценка' },
    bookmark: { iter: 'bookmark', name: 'Избранное' },
    delete: {}
  }
  return (
    <table className="table table-responsive">
      <TableHeader
        onSort={onSort}
        selectedSort={selectedSort}
        columns={columns}
      />
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
