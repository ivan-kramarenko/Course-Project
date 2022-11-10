import React, { ReactElement } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { boolean, object, string } from 'yup'
import { ILoginFormInputs } from '../../../interfaces'
import TextField from '../../common/form/TextField'
import CheckField from '../../common/form/CheckField'

const schema = object({
  email: string().required('Email is required').email('Email must be correct'),
  password: string()
    .required('Password is required')
    .matches(
      /^[A-Za-z]+\d+\S$/g,
      'Password must contain letters, numbers and one special character'
    )
    .min(8, 'Minimum 8 characters'),
  stay: boolean()
}).required()

const onSubmit: SubmitHandler<ILoginFormInputs> = (data: object): void => {
  console.log(JSON.stringify(data))
}

const LoginForm = (): ReactElement => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<ILoginFormInputs>({
    mode: 'onBlur',
    defaultValues: {
      stay: false
    },
    resolver: yupResolver(schema)
  })

  return (
    <form
      className="d-flex justify-content-center align-items-center flex-column mt-5 w-25"
      // eslint-disable-next-line
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mt-3">Login</h2>
      <TextField
        label="Email"
        id="email"
        type="email"
        {...{ register }}
        error={errors.email?.message}
      />
      <TextField
        label="Password"
        id="password"
        type="password"
        {...{ register }}
        error={errors.password?.message}
      />
      <CheckField
        label="Stay in system"
        id="stay"
        {...{ register }}
        error={errors.stay?.message}
      />
      <input
        className="btn btn-success mt-3"
        type="submit"
        disabled={!isValid}
      />
    </form>
  )
}

export default LoginForm
