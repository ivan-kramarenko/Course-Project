export interface IQuality {
  _id: string
  name: string
  color: string
}

export interface IGuest {
  _id: string
  name: string
  profession: {
    _id: string
    name: string
  }
  qualities: IQuality[]
  completedMeetings: number
  rate: number
  bookmark: boolean
}

export interface IProfession {
  [_id: string]: string
  name: string
}

export interface ISortedValue {
  path: string
  order: string
}

export interface ILoginFormInputs {
  email: string
  password: string
}

export interface IRegisterFormInputs extends ILoginFormInputs {
  repeatPassword: string
}
