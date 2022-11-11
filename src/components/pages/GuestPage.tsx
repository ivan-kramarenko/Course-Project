import React, { ReactElement, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import API from '../../api'
import QualitiesList from '../ui/qualities/QualitiesList'
import { IGuest } from '../../interfaces'

const GuestPage = (): ReactElement => {
  const { guestId } = useParams()
  const [guest, setGuest] = useState<IGuest>()
  useEffect(() => {
    void API.users.getById(guestId).then((data) => {
      setGuest(data)
    })
  }, [])
  return (
    <>
      {guest != null && (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h1>{guest.name}</h1>
          <h2>Профессия: {guest.profession.name}</h2>
          <p>Пол: {guest.sex}</p>
          <div className="d-flex">
            <QualitiesList qualities={guest?.qualities} />
          </div>
          <p>Completed Meetings: {guest.completedMeetings}</p>
          <p>Rate: {guest.rate} / 5</p>
          <Link to="edit">
            <button className="btn btn-sm btn-primary" type="button">
              Edit
            </button>
          </Link>
        </div>
      )}
    </>
  )
}

export default GuestPage
