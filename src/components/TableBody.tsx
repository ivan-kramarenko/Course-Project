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
}: TableBodyProps): ReactElement => (
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
          <td key={column}>{_.get(item, columns[column].path)}</td>
        ))}
      </tr>
    ))}
  </tbody>
)
export default TableBody
