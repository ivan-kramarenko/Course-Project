import React, { ReactElement } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

const schema = object({
  email: string().required('Email is required').email('Email must be correct'),
  password: string()
    .required('Password is required')
    .min(8, 'Minimum 8 characters')
    .matches(
      /^[A-Za-z]+\d+\S$/g,
      'Password must contain letters, numbers and one special character'
    )
}).required()

interface IFormInputs {
  email: string
  password: string
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => alert(data)

const LoginForm = (): ReactElement => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<IFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })
  return (
    <form
      className="d-flex justify-content-center align-items-center flex-column mt-5"
      onSubmit={() => handleSubmit(onSubmit)}
    >
      <label htmlFor="email" className="mt-5">
        Email
        <input
          className="form-control mb-2"
          id="email"
          type="email"
          {...register('email')}
        />
      </label>
      <p>{errors.email?.message}</p>
      <label htmlFor="password">
        Password
        <input
          className="form-control mb-3"
          id="password"
          type="text"
          {...register('password')}
        />
      </label>
      <p>{errors.password?.message}</p>
      <input className="btn btn-primary" type="submit" disabled={!isValid} />
    </form>
  )
}

export default LoginForm
