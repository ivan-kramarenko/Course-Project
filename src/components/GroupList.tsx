import React, { ReactElement } from 'react'
import { IProfession } from '../interfaces/models'

interface GroupListProps {
  items: object | IProfession[]
  onItemSelect: (item: IProfession) => void
  valueProperty: string
  contentProperty: string
  selectedItem: IProfession | undefined
  clearFilter: () => void
}

const GroupList = ({
  items,
  onItemSelect,
  valueProperty,
  contentProperty,
  selectedItem,
  clearFilter
}: GroupListProps): ReactElement => {
  const setListItemClassname = (item: IProfession): string => {
    const listItemClasses = ['list-group-item']
    if (selectedItem == null) {
      return listItemClasses[0]
    }
    const isSelected = item._id === selectedItem._id ? 'active' : ''
    listItemClasses.push(isSelected)
    return listItemClasses.join(' ')
  }
  return (
    <>
      <ul className="list-group">
        {Object.entries(items).map((item: [string, IProfession]) => (
          <li
            key={item[1][valueProperty]}
            className={setListItemClassname(item[1])}
          >
            <div
              onClick={() => onItemSelect(item[1])}
              role="button"
              tabIndex={0}
              aria-hidden="true"
            >
              {item[1][contentProperty]}
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-secondary m-3"
        onClick={() => clearFilter()}
      >
        Очистить
      </button>
    </>
  )
}

export default GroupList
