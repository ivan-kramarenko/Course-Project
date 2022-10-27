import React, { ReactElement, ReactNode } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { IGuest } from '../interfaces/models'

interface TableBodyProps {
  data: IGuest[]
  columns: any
}

const TableBody = ({ data, columns }: TableBodyProps): ReactElement => {
  const renderContent = (
    item: IGuest,
    column: string
  ): ReactElement | string | undefined | ReactNode => {
    if (column === 'rate') {
      return `${item[column]} / 5`
    }
    if (column === 'name') {
      return <Link to={item._id}>{item[column]}</Link>
    }
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
