import { useState } from 'react'
import Guest from './Guest'
import api from './api/index'
import { IGuest } from './models'
import { guestsCountByRussianGrammar } from './core/utils/index'

const App = () => {
  const [guests, setGuests] = useState<IGuest[]>(api.users.fetchAll())
  const removeGuest = (e: React.MouseEvent<HTMLButtonElement>, filteredId: string) => {
    setGuests(guests.filter((guest) => guest._id !== filteredId))
  }

  return (
    <>
      <h2 className="text-light rounded bg-primary">
        <span>{guestsCountByRussianGrammar(guests.length)}</span>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Встретился, раз</th>
            <th>Оценка</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => {
            return <Guest key={guest._id} guest={guest} removeGuest={removeGuest} />
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
