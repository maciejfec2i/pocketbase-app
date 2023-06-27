import React, { useState } from 'react'
import { authUser } from '../utils/pb'
import { handleFormInputChange } from '../utils/utilities'

export default function LoginForm(props) {

  const [credentials, setCredentials] = useState({email: "", password: ""})

  return (
    <form className="form" onSubmit={e => authUser({ event: e, email: credentials.email, password: credentials.password, setLoggedIn: props.setLoggedIn })}>
        <input className="form-txt-input" type="email" id="email" name="email" placeholder="Email" onChange={e => handleFormInputChange({ e, formValues: credentials, setFormValues: setCredentials })} />
        <input className="form-txt-input" type="password" id="password" name="password" placeholder="Password" onChange={e => handleFormInputChange({ e, formValues: credentials, setFormValues: setCredentials })} />
        <input className="form-submit-btn" type="submit" id="login-btn" value={"Login"} />
    </form>
  )
}
