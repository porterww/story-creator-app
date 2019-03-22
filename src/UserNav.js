import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RegisterPage from './RegisterPage'
import ForgotPass from './ForgotPass'
//this is for directing the user to the options of signing up or to submit a 'forgot password' form.
class UserNav extends Component {
    
  renderForgotPass = () => {
    return <ForgotPass />
  }

  renderRegisterPage = () => {
    return <RegisterPage />
  }

  render() {
    return (
      <nav className="userNav">
        <Link to="/Sign-up-form" component={this.renderRegisterPage}>
          Sign Up
        </Link>
        <Link to="/Recover-Password" component={this.renderForgotPass}>
          Forgot My Password
        </Link>
      </nav>
    )
  }
}

export default UserNav
