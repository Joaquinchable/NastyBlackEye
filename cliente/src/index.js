import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./scss/Estilos.css";
import Inicio from "./components/Pages/Inicio";
import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog";
import Exposiciones from "./components/Pages/Exposiciones";
import Biofoto from "./components/Pages/Biofoto";
import HeaderHome from "./components/Layout/HeaderHome";
import HeaderInicio from "./components/Layout/HeaderInicio";
//import Login from "./components/Registro/Login";
//import LoginBox from "./components/Registro/LoginBox";
//import RegisterBox from "./components/Registro/RegisterBox";
import Footer from "./components/Layout/Footer";
const App = () => (
  <BrowserRouter basename="/Inicio">

    <div>




      <Switch>

        <Redirect from="/Inicio" to="/home" />
        <Route exact path="/" component={Inicio, HeaderInicio} />
        <Route exact path="/home" component={Home, HeaderHome} />
        <Route exact path="/blog" component={Blog,HeaderHome} />
        <Route exact path="/exposiciones" component={Exposiciones,HeaderHome} />
        <Route exact path="/biofoto" component={Biofoto,HeaderHome} />

      </Switch>
      <Footer />

    </div>
  </BrowserRouter >
);
//<Route exact path="/sing up" component={RegisterBox,Login} />
//<Route exact path="/sing in " component={LoginBox,Login} />

ReactDOM.render(<App />, document.getElementById("root"));
