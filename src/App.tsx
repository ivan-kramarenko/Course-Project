import React, { useState, ReactElement } from 'react'
import api from './api'
import Guests from './components/Guests'
import HeaderGuests from './components/HeaderGuests'
import { IGuest } from './interfaces/models'

const App = (): ReactElement => {
  const [guests, setGuests] = useState<IGuest[]>(api.users.fetchAll())
  const removeGuest = (
    e: React.MouseEvent<HTMLButtonElement>,
    filteredId: string
  ): void => {
    setGuests(guests.filter((guest) => guest._id !== filteredId))
  }
  const switchBookmark = (id: string): void => {
    const elemById = guests.findIndex((guest) => guest._id === id)
    const newGuests = [...guests]
    newGuests[elemById].bookmark = !newGuests[elemById].bookmark
    setGuests(newGuests)
  }
  return (
    <>
      <HeaderGuests countOfGuests={guests.length} />
      <Guests
        guests={guests}
        removeGuest={removeGuest}
        switchBookmark={switchBookmark}
      />
    </>
  )
}

export default App
