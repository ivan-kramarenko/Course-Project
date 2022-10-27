import React, { ReactElement, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../api'
import QualitiesList from '../components/QualitiesList'
import { IGuest } from '../interfaces/models'

const GuestPage = (): ReactElement => {
  const { guestId } = useParams()
  const [guest, setGuest] = useState<IGuest>()
  const navigate = useNavigate()
  useEffect(() => {
    API.users.getById(guestId).then((data) => {
      setGuest(data)
    })
  }, [])
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {guest != null && (
        <>
          <h1>{guest.name}</h1>
          <h2>Профессия: {guest.profession.name}</h2>
          <QualitiesList qualities={guest?.qualities} />
          <p>Completed Meetings: {guest.completedMeetings}</p>
          <p>Rate: {guest.rate} / 5</p>
          <button type="button" onClick={() => navigate(-1)}>
            To guests
          </button>
        </>
      )}
    </>
  )
}

export default GuestPage
