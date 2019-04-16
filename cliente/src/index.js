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

import Footer from "./components/Layout/Footer";
//import Login from "./components/Login/Login";
const App = () => (
  <BrowserRouter basename="/Inicio">

    <div>




      <Switch>

        <Redirect from="/Inicio" to="/home" />
        <Route exact path="/" component={Inicio, HeaderInicio} />
        <Route exact path="/home" component={Home, HeaderHome} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/exposiciones" component={Exposiciones} />
        <Route exact path="/biofoto" component={Biofoto} />
      </Switch>
      <Footer />

    </div>
  </BrowserRouter >
);

ReactDOM.render(<App />, document.getElementById("root"));
