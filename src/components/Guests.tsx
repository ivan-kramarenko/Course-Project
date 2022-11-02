import React, { useState, ReactElement, useEffect } from 'react'
import _ from 'lodash'
import { filterGuests, filterGuestsByItem, paginate } from '../core/utils'
import { IGuest, IProfession, ISortedValue } from '../interfaces/models'
import GroupList from './GroupList'
import Pagination from './Pagination'
import api from '../api/index'
import HeaderGuests from './HeaderGuests'
import GuestsTable from './GuestsTable'
import SearchField from './SearchField'

const Guests = (): ReactElement => {
  const [guests, setGuests] = useState<IGuest[]>([])
  useEffect(() => {
    void api.users.fetchAll().then((data) => {
      setGuests(data)
    })
  }, [])
  const removeGuest = (filteredId: string): void => {
    setGuests(guests.filter((guest) => guest._id !== filteredId))
  }
  const switchBookmark = (id: string): void => {
    const elemById = guests.findIndex((guest) => guest._id === id)
    const newGuests = [...guests]
    newGuests[elemById].bookmark = !newGuests[elemById].bookmark
    setGuests(newGuests)
  }

  const pageSize = 4

  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState<object | IProfession[]>([])
  const [selectedProf, setSelectedProf] = useState<IProfession>()
  const [sortValue, setSortValue] = useState<ISortedValue>({
    path: 'name',
    order: 'asc'
  })
  const [searchGuest, setSearchGuest] = useState('')

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
  const handleSort = (value: ISortedValue): void => {
    setSortValue({ path: value.path, order: value.order })
  }

  const handleSearch = (value: string): void => {
    setSearchGuest(value)
  }

  const filteredGuests = filterGuests(guests, selectedProf, searchGuest)

  const sortedGuests = _.orderBy(
    filteredGuests,
    [sortValue.path],
    // @ts-expect-error Unreachable error code
    [sortValue.order]
  )
  const guestsCrop = paginate(sortedGuests, currentPage, pageSize)
  const count = filteredGuests.length

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {Object.keys(guests).length === 0 ? (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
          Loading...
        </div>
      ) : (
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
          </div>{' '}
          <div className="d-flex flex-column">
            <HeaderGuests countOfGuests={count} />
            <div className="container">
              <div className="row">
                <SearchField {...{ handleSearch }} />
              </div>
            </div>
            {count > 0 && (
              <GuestsTable
                guests={guestsCrop}
                removeGuest={removeGuest}
                switchBookmark={switchBookmark}
                onSort={handleSort}
                selectedSort={sortValue}
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
      )}
    </>
  )
}

export default Guests
