import React, { useState, ReactElement, useEffect } from 'react'
import { filterGuestsByItem, paginate } from '../core/utils'
import { IGuest, IProfession } from '../interfaces/models'
import GroupList from './GroupList'
import Guest from './Guest'
import Pagination from './Pagination'
import api from '../api/index'

interface GuestsProps {
  guests: IGuest[]
  removeGuest: (
    e: React.MouseEvent<HTMLButtonElement>,
    filteredId: string
  ) => void
  switchBookmark: (elemId: string) => void
}

const Guests = ({
  guests,
  removeGuest,
  switchBookmark
}: GuestsProps): ReactElement => {
  const pageSize = 4

  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState([])
  const [selectedProf, setSelectedProf] = useState<[string, IProfession]>()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])
  const handlePageChange = (
    e: React.MouseEvent<HTMLSpanElement>,
    pageIndex: number
  ): void => {
    setCurrentPage(pageIndex)
  }
  const handleProfessionSelect = (item: [string, IProfession]): void => {
    setSelectedProf(item)
  }
  const clearFilter = (): void => {
    setSelectedProf(undefined)
  }

  const filteredGuests = filterGuestsByItem(guests, selectedProf)
  const guestsCrop = paginate(filteredGuests, currentPage, pageSize)

  return (
    <>
      <GroupList
        items={professions}
        onItemSelect={handleProfessionSelect}
        valueProperty="_id"
        contentProperty="name"
        selectedItem={selectedProf}
        clearFilter={clearFilter}
      />
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
          {guestsCrop.map((guest: IGuest) => (
            <Guest
              key={guest._id}
              guest={guest}
              removeGuest={removeGuest}
              switchBookmark={switchBookmark}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={guests.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  )
}

export default Guests
