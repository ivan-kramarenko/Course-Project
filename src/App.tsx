import React, { useState, ReactElement, useEffect } from 'react'
import api from './api'
import Guests from './components/Guests'
import { IGuest } from './interfaces/models'

const App = (): ReactElement => {
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
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {Object.keys(guests).length === 0 ? (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
          Loading...
        </div>
      ) : (
        <Guests
          guests={guests}
          removeGuest={removeGuest}
          switchBookmark={switchBookmark}
        />
      )}
    </>
  )
}

export default App
