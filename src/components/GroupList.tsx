import React, { ReactElement } from 'react'
import { IProfession } from '../interfaces/models'
interface GroupListProps {
  items: IProfession[]
  onItemSelect: (params: any) => void
}

const GroupList = ({ items }: GroupListProps): ReactElement => {
  return (
    <>
      <ul className="list-group">
        {}
        <li className="list-group-item">An item</li>
      </ul>
    </>
  )
}

export default GroupList
