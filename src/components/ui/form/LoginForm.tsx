import React, { ReactElement } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import TextField from '../../common/form/TextField'
import { ILoginFormInputs } from '../../../interfaces'

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

const onSubmit: SubmitHandler<ILoginFormInputs> = (data) => alert(data)

const LoginForm = (): ReactElement => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<ILoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })
  return (
    <form
      className="d-flex justify-content-center align-items-center flex-column mt-5"
      onSubmit={() => handleSubmit(onSubmit)}
    >
      <div className="mt-5">
        <TextField
          label="Email"
          id="email"
          {...{ register }}
          error={errors.email?.message}
        />
      </div>
      <TextField
        label="Password"
        id="password"
        {...{ register }}
        error={errors.password?.message}
      />
      <input
        className="btn btn-primary mt-3"
        type="submit"
        disabled={!isValid}
      />
    </form>
  )
}

export default LoginForm
