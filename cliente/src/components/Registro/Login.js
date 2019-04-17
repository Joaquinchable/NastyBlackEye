import React, { Component } from "react";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox.js.js";
import "../Estilos/Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false };
  }
  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }
  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }
  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={
              "controller" +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            {" "}
            Login{" "}
          </div>
          ;
          <div
            className={
              "contoller" +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            {" "}
            Regiter{" "}
          </div>
          ;
        </div>
        <div className=" box-container"> </div>;
        {this.state.isLoginOpen && <LoginBox />}
        {this.state.isRegisterOpen && <RegisterBox />}
      </div>
    );
  }
}

export default Login;
