export interface IGuest {
  _id: string
  name: string
  profession: {
    _id: string
    name: string
  }
  qualities: {
    _id: string
    name: string
    color: string
  }[]
  completedMeetings: number
  rate: number
  bookmark: boolean
}

export interface IQuality {
  _id: string
  name: string
  color: string
}
