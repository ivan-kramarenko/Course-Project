import React, { ReactElement, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { object, ref, string } from 'yup'
import { IProfession, IRegisterFormInputs } from '../../../interfaces'
import TextField from '../../common/form/TextField'
import API from '../../../api'
import SelectField from '../../common/form/SelectField'

const schema = object({
  email: string().required('Email is required').email('Email must be correct'),
  password: string()
    .required('Password is required')
    .matches(
      /^[A-Za-z]+\d+\S$/g,
      'Password must contain letters, numbers and one special character'
    )
    .min(8, 'Minimum 8 characters'),
  repeatPassword: string()
    .oneOf([ref('password')], 'Passwords dont match')
    .required('Confirm password is required'),
  profession: string().required('Profession is required')
}).required()

const RegisterForm = (): ReactElement => {
  const [professions, setProfessions] = useState<object | IProfession[]>([])
  useEffect(() => {
    void API.professions.fetchAll().then((data) => {
      if (data instanceof Array) {
        const dataJson = { ...data }
        setProfessions(dataJson)
      }
      setProfessions(data)
    })
  }, [])
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<IRegisterFormInputs>({
    mode: 'all',
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<IRegisterFormInputs> = (data) => {
    alert(data)
  }

  return (
    <form
      className="d-flex justify-content-center align-items-center flex-column mt-5"
      onSubmit={() => handleSubmit(onSubmit)}
    >
      <h2 className="mt-3">Register</h2>
      <div className="mt-2">
        <TextField
          label="Email"
          id="email"
          type="email"
          {...{ register }}
          error={errors.email?.message}
        />
      </div>
      <TextField
        label="Password"
        id="password"
        type="password"
        {...{ register }}
        error={errors.password?.message}
      />
      <TextField
        label="Repeat password"
        id="repeatPassword"
        type="password"
        {...{ register }}
        error={errors.repeatPassword?.message}
      />
      <SelectField
        label="Profession"
        id="profession"
        {...{ register }}
        items={professions}
        error={errors.profession?.message}
      />
      <input
        className="btn btn-success mt-3"
        type="submit"
        disabled={!isValid}
      />
    </form>
  )
}

export default RegisterForm
