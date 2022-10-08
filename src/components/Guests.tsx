import { useState } from 'react'
import api from '../api'
import { IGuest } from '../interfaces/models'
import Guest from './Guest'

const Guests = () => {
  const [guests, setGuests] = useState<IGuest[]>(api.users.fetchAll())
  const removeGuest = (e: React.MouseEvent<HTMLButtonElement>, filteredId: string) => {
    setGuests(guests.filter((guest) => guest._id !== filteredId))
  }
  const switchBookmark = (id: string) => {
    const elemById = guests.findIndex((guest) => guest._id === id)
    const newGuests = [...guests]
    newGuests[elemById].bookmark = !newGuests[elemById].bookmark
    setGuests(newGuests)
  }
  return (
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
        {guests.map((guest) => {
          return <Guest key={guest._id} guest={guest} removeGuest={removeGuest} switchBookmark={switchBookmark} />
        })}
      </tbody>
    </table>
  )
}

export default Guests
