import { useState } from 'react'
import { handleFormInputChange } from '../utils/utilities'
import { authenticator } from '../utils/pb'
import { useNavigate } from 'react-router-dom'

export default function LoginForm(props) {

  const [credentials, setCredentials] = useState({email: "", password: ""})
  const [error, setError] = useState()
  const navigateTo = useNavigate()

  const HOME_PAGE_URL = "/"

  return (
    <form className="form" onSubmit={
      async (e) => {
        e.preventDefault()
        setError(false)
        const result = await authenticator.withCredentials({
          usernameOrEmail: credentials.email,
          password: credentials.password
        })
        .authenticateAs("user")
        
        if(result?.error) setError(result.error)
        else {
          props.setLoggedIn(authenticator.authStoreIsValid())
          navigateTo(HOME_PAGE_URL)
        }
      }
    }>
        <input className="form-txt-input" type="email" id="email" name="email" placeholder="Email" onChange={e => handleFormInputChange({ e, formValues: credentials, setFormValues: setCredentials })} />
        <input className="form-txt-input" type="password" id="password" name="password" placeholder="Password" onChange={e => handleFormInputChange({ e, formValues: credentials, setFormValues: setCredentials })} />
        {error && 
          <p>{error}</p>
        }
        <input className="form-submit-btn" type="submit" id="login-btn" value={"Login"} />
    </form>
  )
}
