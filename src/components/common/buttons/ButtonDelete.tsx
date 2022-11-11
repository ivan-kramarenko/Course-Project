import React, { ReactElement } from 'react'
import { IGuest } from '../../../interfaces'

interface ButtonDeleteProps {
  guest: IGuest
  removeGuest: (filteredId: string) => void
}

const ButtonDelete = ({
  removeGuest,
  guest
}: ButtonDeleteProps): ReactElement => (
  <button
    type="button"
    onClick={() => removeGuest(guest._id)}
    className="btn btn-danger"
  >
    Delete
  </button>
)

export default ButtonDelete
