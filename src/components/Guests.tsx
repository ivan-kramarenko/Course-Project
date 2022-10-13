import React, { useState, ReactElement, useEffect } from 'react'
import { filterGuestsByItem, paginate } from '../core/utils'
import { IGuest, IProfession } from '../interfaces/models'
import GroupList from './GroupList'
import Pagination from './Pagination'
import api from '../api/index'
import HeaderGuests from './HeaderGuests'
import GuestsTable from './GuestsTable'

interface GuestsProps {
  guests: IGuest[]
  removeGuest: (filteredId: string) => void
  switchBookmark: (elemId: string) => void
}

const Guests = ({
  guests,
  removeGuest,
  switchBookmark
}: GuestsProps): ReactElement => {
  const pageSize = 4

  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState<object | IProfession[]>([])
  const [selectedProf, setSelectedProf] = useState<IProfession>()

  useEffect(() => {
    void api.professions.fetchAll().then((data) => {
      if (data instanceof Array) {
        const dataJson = { ...data }
        setProfessions(dataJson)
      }
      setProfessions(data)
    })
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handlePageChange = (pageIndex: number): void => {
    setCurrentPage(pageIndex)
  }
  const handleProfessionSelect = (item: IProfession): void => {
    setSelectedProf(item)
  }
  const clearFilter = (): void => {
    setSelectedProf(undefined)
  }
  const handleSort = (value: string): void => {
    console.log(value)
  }

  const filteredGuests = filterGuestsByItem(guests, selectedProf)
  const guestsCrop = paginate(filteredGuests, currentPage, pageSize)
  const count = filteredGuests.length

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column flex-shrink-0 m-2">
        <GroupList
          items={professions}
          onItemSelect={handleProfessionSelect}
          valueProperty="_id"
          contentProperty="name"
          selectedItem={selectedProf}
          clearFilter={clearFilter}
        />
      </div>

      <div className="d-flex flex-column">
        <HeaderGuests countOfGuests={count} />
        {count > 0 && (
          <GuestsTable
            guests={guestsCrop}
            removeGuest={removeGuest}
            switchBookmark={switchBookmark}
            onSort={handleSort}
          />
        )}
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default Guests
