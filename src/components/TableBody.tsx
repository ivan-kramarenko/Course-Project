import React, { ReactElement } from 'react'
import _ from 'lodash'
import { IGuest } from '../interfaces/models'
// import Guest from './Guest'

interface TableBodyProps {
  data: IGuest[]
  removeGuest: (filteredId: string) => void
  switchBookmark: (elemId: string) => void
  columns: any
}

const TableBody = ({
  removeGuest, // eslint-disable-line
  switchBookmark, // eslint-disable-line
  data,
  columns
}: TableBodyProps): ReactElement => {
  const renderContent = (
    item: IGuest,
    column: string
  ): ReactElement | string | undefined => {
    if (columns[column].component != null) {
      const { component } = columns[column]
      if (typeof component === 'function') {
        return component(item)
      }
      return component
    }
    return _.get(item, columns[column].path)
  }
  return (
    <tbody className="table-group-divider">
      {data.map((item: IGuest) => (
        // <Guest
        //   key={item._id}
        //   guest={item}
        //   removeGuest={removeGuest}
        //   switchBookmark={switchBookmark}
        // />
        <tr key={item._id} className="border-bottom align-middle">
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
export default TableBody
