import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Estilos/App.css";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Exposiciones from "./components/Exposiciones";
import Biofoto from "./components/Biofoto";
import Header from "./components/Header";
import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";
import Principal from "./components/Principal";
import Login from "./components/Login/Login";
const App = () => (
  <BrowserRouter>
    <div>
      <Login />
      <Header />
      <Navegacion />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/exposiciones" component={Exposiciones} />
        <Route exact path="/biofoto" component={Biofoto} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
