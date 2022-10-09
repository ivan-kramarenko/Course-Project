import React, { ReactElement } from 'react'
import { IQuality } from '../interfaces/models'

interface QualityProps {
  quality: IQuality
}

const Quality = ({ quality }: QualityProps): ReactElement => {
  return (
    <span className={`m-1 badge bg-${quality.color}`} key={quality._id}>
      {quality.name}
    </span>
  )
}

export default Quality
