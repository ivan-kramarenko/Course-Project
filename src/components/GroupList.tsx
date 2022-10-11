import React, { ReactElement } from 'react'
import { IProfession } from '../interfaces/models'

interface GroupListProps {
  items: IProfession[]
  onItemSelect: (params: any) => void
  valueProperty: string
  contentProperty: string
}

const GroupList = ({
  items,
  onItemSelect,
  valueProperty = '_id',
  contentProperty = 'name'
}: GroupListProps): ReactElement => (
  <ul className="list-group">
    {Object.entries(items).map((item) => (
      <li key={item[1][valueProperty]} className="list-group-item">
        {item[1][contentProperty]}
      </li>
    ))}
  </ul>
)

export default GroupList
