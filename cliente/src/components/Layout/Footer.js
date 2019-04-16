import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-culumna">
              <h3>LOGO</h3>
            </div>
            <div className="footer-culumna">
              <h3>Siguenos:</h3>
              <a href="#" className="facebook" />
              <a href="#" className="instagram" />
              <a href="#" className="Flickr" />
              <a href="#" className="YouToBE" />
            </div>
            <div className="footer-culumna">
              <h3>Novedades</h3>
              <input type="email" placeholder="Dejanos tu correo" />
              <input type="submit" value="Enviar" />
            </div>
          </div>
        </div>

        <div className="footer-copy">
          <div className="footer-copy-main">
            &copy; 2019 , Todos los derechos reservados - | Nasty Black Eye |.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
