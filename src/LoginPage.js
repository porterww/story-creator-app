import React, { Component } from 'react'
import UserNav from './UserNav'
import GoogleLogin from 'react-google-login'
import {GoogleLogout} from 'react-google-login'
//this will be the new front page before users can see anything else and will provide the options of login or what UserNav Component offers at bottom page
class LoginPage extends Component {
  render() {
    const responseGoogle = response => {
      console.log(response.tokenId)
      fetch('http://localhost:2018/OAuth/google', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: response.tokenId})
      })
        .catch(err => {
          console.log(err.message)
        })
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(loginResponse => {
          console.log('LOGIN', loginResponse)
        })
    }
    // const logout = logoutResponse => {}

    return (
      <div className="login-body">
        <div className="login-window">
          <h1 className="header1">Welcome to Story Creator!</h1>
          <legend>
            <h2 className="header2">Login</h2>
            <section className="login-section">
              <div className="login-inputs">
                <label htmlFor="email">
                  <input
                    name="username"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                  />
                </label>
                <label htmlFor="password">
                  <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                    pattern="[A-Z][A-Za-z'!_@*^]+"
                  />
                </label>
                <div className="login-button">
                  <button className="login-auth">Login</button>
                </div>
                <div className="googleLogin">
                  <p>Or, sign in with a different media</p>
                  <GoogleLogin
                    clientId="638427942108-gu6aaiirubndb0njlojqqanocgjfa3ao.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  />
                  {/* <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} /> */}
                </div>
              </div>
            </section>
          </legend>
          <UserNav />
        </div>
        <footer />
      </div>
    )
  }
}

export default LoginPage
