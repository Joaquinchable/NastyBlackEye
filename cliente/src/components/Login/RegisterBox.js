import React, { Component } from "react";

class RegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitRegister(e) {}
  render() {
    return (
      <div className="inner-container">
        <div className="header">Resgister</div>
        <div className="box">
          <div className="input-grup">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name=" username"
              className="login-input"
              placeholder="Username"
            />
          </div>

          <div className="input-grup">
            <label htmlFor="password">User Name</label>
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
              Resgister
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterBox;
