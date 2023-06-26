import React from 'react'

export default function LoginForm() {
  return (
    <form className="form">
        <input className="form-txt-input" type="email" id="email" name="email" placeholder="Email" />
        <input className="form-txt-input" type="password" id="password" name="password" placeholder="Password" />
        <input className="form-submit-btn" type="submit" id="login-btn" value={"Login"} />
    </form>
  )
}
