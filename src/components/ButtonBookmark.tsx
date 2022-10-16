import React, { ReactElement } from 'react'
import { IGuest } from '../interfaces/models'

interface ButtonBookmarkProps {
  bookmark: boolean
  guest: IGuest
  switchBookmark: (id: string) => void
}

const ButtonBookmark = ({
  bookmark,
  guest,
  switchBookmark
}: ButtonBookmarkProps): ReactElement => {
  const setBtnClassName = (): string => {
    const btnBgClassName = !bookmark ? 'btn-secondary' : 'btn-primary'
    const btnClasses = ['btn', btnBgClassName]
    return btnClasses.join(' ')
  }
  const setBtnText = (): string => (!bookmark ? 'False' : 'True')
  return (
    <button
      type="button"
      className={setBtnClassName()}
      onClick={() => switchBookmark(guest._id)}
    >
      {setBtnText()}
    </button>
  )
}

export default ButtonBookmark
