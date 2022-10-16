import React, { ReactElement } from 'react'
import { IGuest, ISortedValue } from '../interfaces/models'
import ButtonBookmark from './ButtonBookmark'
import ButtonDelete from './ButtonDelete'
import TableBody from './TableBody'
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
    name: { path: 'name', name: 'Имя' },
    qualities: { name: 'Качества' },
    profession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      // eslint-disable-next-line react/no-unstable-nested-components
      component: (guest: IGuest) => (
        <ButtonBookmark
          bookmark={guest.bookmark}
          switchBookmark={switchBookmark}
          guest={guest}
        />
      )
    },
    delete: {
      // eslint-disable-next-line react/no-unstable-nested-components
      component: (guest: IGuest) => (
        <ButtonDelete guest={guest} removeGuest={removeGuest} />
      )
    }
  }
  return (
    <table className="table table-responsive">
      <TableHeader
        onSort={onSort}
        selectedSort={selectedSort}
        columns={columns}
      />
      <TableBody data={guests} columns={columns} />
    </table>
  )
}

export default GuestsTable
