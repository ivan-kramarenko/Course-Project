import React, { ReactElement } from 'react'

interface ButtonBookmarkProps {
  bookmark: boolean
  handleBookmarkClick: () => void
}

const ButtonBookmark = ({
  bookmark,
  handleBookmarkClick
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
      onClick={() => handleBookmarkClick()}
      className={setBtnClassName()}
    >
      {setBtnText()}
    </button>
  )
}

export default ButtonBookmark
