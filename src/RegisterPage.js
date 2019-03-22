import React, { Component } from 'react'
//this is where user can make a new account with the app.
class RegisterPage extends Component {
  checkForm = () => {
    let f = document.forms['register-form'].elements
    let cansubmit = true

    for (let i = 0; i < f.length; i++) {
      if (f[i].value.length === 0) cansubmit = false
    }

    document.getElementById('submitbutton').disabled = !cansubmit
  }

  render() {
    return (
      <div className="register-body">
        <div className="R-parent">
          <section className="register-window">
            <h1>Register For Your Account</h1>
            <h2>Fill out the information below</h2>
            <form className="register-form">
              <fieldset className="personal-info-section">
                <legend>Personal information</legend>

                <label htmlFor="first-name">
                  <span title="required">*</span> First Name:
                </label>
                <input
                  name="first-name"
                  id="Fname"
                  type="text"
                  placeholder="First Name"
                  onKeyUp={this.checkForm}
                  required
                />
                <label htmlFor="last-name">
                  <span title="required">*</span> Last Name:
                </label>
                <input
                  name="last-name"
                  id="Lname"
                  type="text"
                  placeholder="Last Name"
                  onKeyUp={this.checkForm}
                  required
                />
                <label htmlFor="dob">
                  <span title="required">*</span> Date of Birth:
                </label>
                <input
                  name="dob"
                  id="dob"
                  type="date"
                  min="01/01/1920"
                  onKeyUp={this.checkForm}
                  required
                />
              </fieldset>
              <section className="login-creds-window">
                <fieldset className="register-section">
                  <legend>Login Credentials</legend>

                  <label htmlFor="email">
                    <span title="required">*</span> Email:
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    onKeyUp={this.checkForm}
                    required
                  />
                  <label htmlFor="confirm-email">
                    <span title="required">*</span> Confirm Email:
                  </label>
                  <input
                    name="confirm-email"
                    id="confirm-email"
                    type="email"
                    placeholder="Confirm Email"
                    onKeyUp={this.checkForm}
                    required
                  />
                  <label htmlFor="password">
                    <span title="required">*</span> Password:
                  </label>
                  <input
                    name="password"
                    id="pass"
                    type="password"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!_@*$#%^]"
                    minLength="8"
                    maxLength="16"
                    placeholder="Password123!"
                    onKeyUp={this.checkForm}
                  />
                  <label htmlFor="confirm-password">
                    <span title="required">*</span> Confirm Password:
                  </label>
                  <input
                    name="confirm-password"
                    id="confirm-pass"
                    type="password"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!_@*$#%^]"
                    minLength="8"
                    maxLength="16"
                    placeholder="Confirm Password"
                    onKeyUp={this.checkForm}
                  />
                </fieldset>
              </section>
              <div className="register-button">
                <button
                  id="submitbutton"
                  type="submit"
                  value="Submit"
                  className="pure-button pure-button-primary"
                >
                  submit{' '}
                </button>
              </div>
            </form>
          </section>
        </div>
        <footer />
      </div>
    )
  }
}

export default RegisterPage
