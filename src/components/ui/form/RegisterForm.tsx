import React, { ReactElement } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { object, ref, string } from 'yup'
import { IRegisterFormInputs } from '../../../interfaces'
import TextField from '../../common/form/TextField'

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
    .required('Confirm password is required')
}).required()

const RegisterForm = (): ReactElement => {
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
      <input
        className="btn btn-success mt-3"
        type="submit"
        disabled={!isValid}
      />
    </form>
  )
}

export default RegisterForm
