import React, { Component } from "react";
import HeaderInicio from './../Layout/HeaderInicio'

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitLogin(e) { }

  render() {
    return (
      <div>
        <HeaderInicio />
        <div className="header-login">Sign In</div>
        <section>

          <div className="box">
            <div className="input-grup">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="text"
                name=" username"
                className="login-input"
                placeholder="Email"
              />
            </div>

            <div className="input-grup">
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
              />

              <button
                type="button"
                className="login-btn"
                onClick={this.submitLogin.bind(this)}
              >
                Login
            </button>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default LoginBox;
