import React, { ReactElement } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

const schema = object({
  email: string().required('Email is required').email('Email must be correct'),
  password: string()
    .required('Password is required')
    .matches(
      /^[A-Za-z]+\d+\S$/g,
      'Password must contain letters, numbers and one special character'
    )
    .min(8, 'Minimum 8 characters')
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
          className="form-control"
          id="email"
          type="email"
          {...register('email')}
        />
      </label>
      {errors.email?.message != null && (
        <div className="mb-2">{errors.email.message}</div>
      )}
      <label htmlFor="password">
        Password
        <input
          className="form-control"
          id="password"
          type="password"
          {...register('password')}
        />
      </label>
      {errors.password?.message != null && <div>{errors.password.message}</div>}
      <input
        className="btn btn-primary mt-3"
        type="submit"
        disabled={!isValid}
      />
    </form>
  )
}

export default LoginForm
