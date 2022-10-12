import React, { ReactElement } from 'react'
import { IProfession } from '../interfaces/models'

interface GroupListProps {
  items: IProfession[]
  onItemSelect: (item: [string, IProfession]) => void
  valueProperty: string
  contentProperty: string
  selectedItem: [string, IProfession] | undefined
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
  const setListItemClassname = (item: [string, IProfession]): string => {
    const listItemClasses = ['list-group-item']
    if (selectedItem == null) {
      return listItemClasses[0]
    }
    const isSelected = item[1]._id === selectedItem[1]._id ? 'active' : ''
    listItemClasses.push(isSelected)
    return listItemClasses.join(' ')
  }
  return (
    <>
      <ul className="list-group">
        {Object.entries(items).map((item: [string, IProfession]) => (
          <li
            key={item[1][valueProperty]}
            className={setListItemClassname(item)}
          >
            <div
              onClick={() => onItemSelect(item)}
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
