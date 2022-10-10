import React, { useState, ReactElement, useEffect } from 'react'
import { paginate } from '../core/utils'
import { IGuest } from '../interfaces/models'
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

  useEffect(() => {
    api.professions.fetchAll().then(
      (data) => setProfessions(data)
    )
  }, [])
  const handlePageChange = (
    e: React.MouseEvent<HTMLSpanElement>,
    pageIndex: number
  ): void => {
    setCurrentPage(pageIndex)
  }
  const handleProfessionSelect = (params: any): void => {
    console.log(params)
  }

  const guestsCrop = paginate(guests, currentPage, pageSize)

  return (
    <>
      <GroupList items={professions} onItemSelect={handleProfessionSelect} />
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
          {guestsCrop.map((guest: IGuest) => {
            return (
              <Guest
                key={guest._id}
                guest={guest}
                removeGuest={removeGuest}
                switchBookmark={switchBookmark}
              />
            )
          })}
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
