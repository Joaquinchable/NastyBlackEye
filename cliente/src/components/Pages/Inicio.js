import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "./../../scss/_Inicio.scss";

class Inicio extends Component {
  render() {
    return (
      <div>
        <body className=" body-inicio">
          <header className="header-inicio">
            <div className="Titulo">Nasty Black Eye</div>
            <ul className="ul-inicio">
              <li className="li-inicio">
                <Link to="/home" className="a-inicio">Nasty Black Eye</Link>
              </li>
              <li className="li-inicio">
                <Link to="/Sign In" className="a-inicio">Sign In</Link>
              </li>
              <li className="li-inicio">
                <Link to="/Sign Up" className="a-inicio">Sign Up</Link>
              </li>
            </ul>
          </header>

          <section className="section-inicio">
            <h1>hola</h1>
            <article className="hero-inicio" />
          </section>

          <footer className="foter">

          </footer>

        </body>
      </div>
    );
  }
}

export default Inicio;
