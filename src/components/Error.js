import React from 'react';
import classnames from 'classnames'
import './Error.scss'

export default function Error(props) {

  const errorClass = classnames('login-error', {
    'login-error--enabled': props.valid,
    'login-error--disabled': props.valid === false
  })

  return (
    <span class={ errorClass }>
      The email or password you entered is incorrect.<br/>
      Please try again.
    </span>
  )
}