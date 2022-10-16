import React, { ReactElement } from 'react'
import _ from 'lodash'
import { IGuest } from '../interfaces/models'

interface TableBodyProps {
  data: IGuest[]
  columns: any
}

const TableBody = ({ data, columns }: TableBodyProps): ReactElement => {
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
