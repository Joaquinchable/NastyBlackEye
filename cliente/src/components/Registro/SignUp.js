import React, { Component } from "react";
import HeaderInicio from "./../Layout/HeaderInicio"

class RegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitRegister(e) { }
  render() {
    return (
      <div>
        <HeaderInicio />
        <div className="header-login">Sign Up</div>
        <section>


          <div className="box">
            <div className="input-grup">
              <label htmlFor="Name" className="label">Name</label>
              <input
                type="text"
                name=" username"
                className="login-input"
                placeholder="Name"
              />
            </div>
            <div className="input-grup">
              <label htmlFor="LastName" className="label">LastName</label>
              <input
                type="text"
                name=" username"
                className="login-input"
                placeholder="LastName"
              />
            </div>
            <div className="input-grup">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="text"
                name=" email"
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
                onClick={this.submitRegister(this)}
              >
                Sign Up
            </button>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default RegisterBox;
