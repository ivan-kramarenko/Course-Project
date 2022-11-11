import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactElement, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import { array, object, string } from 'yup'
import API from '../../../api'
import {
  IEditFormInputs,
  IFormQualities,
  IGuest,
  IProfession,
  IQuality
} from '../../../interfaces'
import MultiSelectField from '../../common/form/MultiSelectField'
import RadioField from '../../common/form/RadioField'
import SelectField from '../../common/form/SelectField'
import TextField from '../../common/form/TextField'

const schema = object({
  name: string().required('Name is required'),
  email: string().required('Email is required').email('Email must be correct'),
  profession: string().required('Profession is required'),
  sex: string().required('Gender is required'),
  qualities: array().required('Qualities is required')
}).required()

const EditUserForm = (): ReactElement => {
  const { guestId } = useParams()
  const navigate = useNavigate()
  const [guestData, setGuestData] = useState<IGuest>()
  const [professions, setProfessions] = useState<IProfession[]>([])
  const [qualities, setQualities] = useState<object>([])
  useEffect(() => {
    void API.professions.fetchAll().then((data) => {
      if (data instanceof Array) {
        const dataJson = { ...data }
        setProfessions(dataJson)
      }
      setProfessions(data)
    })
  }, [])
  useEffect(() => {
    void API.qualities.fetchAll().then((data) => {
      setQualities(data)
    })
  }, [])
  useEffect(() => {
    void API.users.getById(guestId).then((data) => setGuestData(data))
  }, [])

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    setValue
  } = useForm<IEditFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const getQualities = (selectedQuals: IFormQualities[]): IQuality[] => {
    const entriesQuals = Object.entries(qualities)
    const result = []

    for (let i = 0; i < entriesQuals.length; i += 1) {
      for (let j = 0; j < selectedQuals.length; j += 1) {
        if (entriesQuals[i][0] === selectedQuals[j].value) {
          result.push(entriesQuals[i])
        }
      }
    }

    return Object.values(Object.fromEntries(result))
  }

  useEffect(() => {
    if (guestData !== undefined) {
      setValue('name', guestData.name)
      setValue('email', guestData.email)
      setValue('profession', guestData.profession.name)
      setValue('sex', guestData.sex)
    }
  }, [guestData])

  const getProfession = (selectedProf: string): IProfession | undefined =>
    professions.find((prof: { name: string }) => prof.name === selectedProf)

  const onSubmit: SubmitHandler<IEditFormInputs> = (
    data: IEditFormInputs
  ): void => {
    const formattedProf = getProfession(data.profession)
    console.log(data.qualities)
    const formattedQual = getQualities(data.qualities)
    console.log(formattedQual)
    const formattedData = {
      ...data,
      profession: formattedProf,
      qualities: formattedQual
    }
    console.log(formattedData)
    void API.users.update(guestId, formattedData)
    navigate(-1)
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <form
        className="d-flex justify-content-center align-items-center flex-column mt-5 w-25"
        // eslint-disable-next-line
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Name"
          type="text"
          id="name"
          {...{ register }}
          error={errors.name?.message}
        />
        <TextField
          label="Email"
          type="email"
          id="email"
          {...{ register }}
          error={errors.email?.message}
        />
        <SelectField
          label="Choose your profession"
          id="profession"
          {...{ register }}
          items={professions}
          error={errors.profession?.message}
        />
        <RadioField
          items={[
            { name: 'Male', value: 'male' },
            { name: 'Female', value: 'female' },
            { name: 'Other', value: 'other' }
          ]}
          label="Gender"
          id="sex"
          {...{ register }}
          error={errors.sex?.message}
        />
        <Controller
          name="qualities"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <MultiSelectField
              items={qualities}
              label="Qualities"
              id="qualities"
              onChange={onChange}
              value={value}
              error={error?.message}
            />
          )}
        />
        <input
          disabled={!isValid}
          className="btn btn-success mt-3"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  )
}

export default EditUserForm
