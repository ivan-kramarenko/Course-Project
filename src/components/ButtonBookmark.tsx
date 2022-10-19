import React, { ReactElement } from 'react'
import { Bookmark, BookmarkFill } from 'react-bootstrap-icons'
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
  const renderBookmark = (): any =>
    !bookmark ? (
      <Bookmark type="button" onClick={() => switchBookmark(guest._id)} />
    ) : (
      <BookmarkFill type="button" onClick={() => switchBookmark(guest._id)} />
    )
  return <> {renderBookmark()}</>
}

export default ButtonBookmark
