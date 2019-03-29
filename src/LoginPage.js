import React, { Component } from 'react'
import UserNav from './UserNav'
//this will be the new front page before users can see anything else and will provide the options of login or what UserNav Component offers at bottom page
class LoginPage extends Component {
  render() {
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