import { useState } from 'react'
import Guest from './Guest'
import api from './api/index'
import { IGuest } from './interfaces/models'
import { guestsCountByRussianGrammar } from './core/utils/index'

const App = () => {
  const [guests, setGuests] = useState<IGuest[]>(api.users.fetchAll())
  const removeGuest = (e: React.MouseEvent<HTMLButtonElement>, filteredId: string) => {
    setGuests(guests.filter((guest) => guest._id !== filteredId))
  }
  const setHeaderClassName = (): string => {
    const headerBgClassName = guests.length === 0 ? 'bg-danger' : 'bg-primary'
    const headerClasses = ['text-light text-center rounded p-1 float-left vw-30', headerBgClassName]
    return headerClasses.join(' ')
  }
  return (
    <>
      <h4 className={setHeaderClassName()}>
        <span>{guestsCountByRussianGrammar(guests.length)}</span>
      </h4>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {guests.map((guest) => {
            return <Guest key={guest._id} guest={guest} removeGuest={removeGuest} />
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
