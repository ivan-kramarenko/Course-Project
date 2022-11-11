export interface IQuality {
  _id: string
  name: string
  color: string
}

export interface IGuest {
  _id: string
  name: string
  email: string
  sex: string
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
  stay?: boolean
}

export interface IFormQualities {
  value: string
  label: string
}

export interface IRegisterFormInputs {
  email: string
  password: string
  repeatPassword: string
  profession: string
  gender: string
  qualities: IFormQualities[]
  rules: boolean
}

export interface IEditFormInputs {
  name: string
  email: string
  profession: string
  sex: string
  qualities: IFormQualities[]
}
