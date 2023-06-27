import LoginForm from './LoginForm'

export default function Login(props) {
  return (
    <div className="main-container flex-container centre">
      <div className="flex-container centre login-page-inner">
        <LoginForm setLoggedIn={props.setLoggedIn} />
      </div>
    </div>
  )
}
