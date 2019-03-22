import React, { Component } from 'react'
//this will be the new front page before users can see anything else and will provide the options of login or what UserNav Component offers at bottom page
class ForgotPass extends Component {
  render() {
    return (
      <div className="F-pass-body">
        <div className="F-pass-window">
          <h1 className="F-header1">Fill in the inputs below</h1>
          <legend>
            <section className="F-pass-section">
              <div className="F-pass-inputs">
                <label htmlFor="email">
                  <input
                    name="username"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                  />
                </label>
                <div className="F-pass-button">
                <button className="F-pass-auth">Reset Password</button>
                </div>
              </div>
            </section>
          </legend>
        </div>
      </div>
    )
  }
}

export default ForgotPass
