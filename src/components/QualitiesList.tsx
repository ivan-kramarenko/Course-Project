import React, { ReactElement } from 'react'
import { IQuality } from '../interfaces/models'
import Quality from './Quality'

interface QualitiesListProps {
  qualities: IQuality[]
}

const QualitiesList = ({ qualities }: QualitiesListProps): ReactElement => (
  <>
    {qualities.map((quality) => (
      <Quality key={quality._id} quality={quality} />
    ))}
  </>
)

export default QualitiesList
