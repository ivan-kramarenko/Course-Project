export interface IGuest {
  _id: string
  name: string
  profession: {
    _id: string
    name: string
  }
  qualities: Array<{
    _id: string
    name: string
    color: string
  }>
  completedMeetings: number
  rate: number
  bookmark: boolean
}

export interface IQuality {
  _id: string
  name: string
  color: string
}

export interface IProfession {
  [_id: string]: string
  name: string
}

export interface ISortedValue {
  path: string
  order: string
}
