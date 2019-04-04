import React, { Component } from "react";
import "./../Estilos/Principal.css";

class Principal extends Component {
  render() {
    return (
      <div>
        <body>
          <header>
            <div class="Titulo">Nasty Black Eye</div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </header>

          <section>
            <h1>hola</h1>
            <article class="hero" />
          </section>

          <footer />
        </body>
      </div>
    );
  }
}

export default Principal;
