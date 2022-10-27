import React, { ReactElement } from 'react'

const GuestPage = (): ReactElement => {
  const guest = {
    name: 'Боб Келсо',
    profession: {
      name: 'Доктор'
    },
    completedMeetings: 100,
    rate: 3.5
  }
  return (
    <>
      <h1>{guest.name}</h1>
      <h2>Профессия: {guest.profession.name}</h2>
      <ul>qualities</ul>
      <p>Completed Meetings: {guest.completedMeetings}</p>
      <p>Rate: {guest.rate} / 5</p>
      <button type="button">To guests</button>
    </>
  )
}

export default GuestPage
