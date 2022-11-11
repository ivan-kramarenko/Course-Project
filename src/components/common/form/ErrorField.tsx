import React, { ReactElement } from 'react'

interface ErrorFieldProps {
  error: string | undefined
}

const ErrorField = ({ error }: ErrorFieldProps): ReactElement => (
  <>
    {error != null && (
      <div className="mb-2 text-center invalid-feedback">{error}</div>
    )}
  </>
)

export default ErrorField
