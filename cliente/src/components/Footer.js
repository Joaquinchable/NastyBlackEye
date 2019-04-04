import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                  
         <div class="footer-container"> 
            <div class="footer-main">
                <div class="footer-culumna">
                    <h3>LOGO</h3>
                </div>
                <div class="footer-culumna">
                    <h3>Siguenos:</h3>
                    <a href="#" class="facebook"></a>
                    <a href="#" class="instagram"></a>
                    <a href="#" class="Flickr"></a>
                    <a href="#" class="YouToBE"></a>
                </div>
                <div class="footer-culumna">
                    <h3>Novedades</h3>
                    <input type="email" placeholder="Dejanos tu correo"/> 
                    <input type="submit" value="Enviar"/>
                </div>
               
            </div>
            
         </div>

         <div class="footer-copy">
             <div class="footer-copy-main">
                 &copy; 2019 , Todos los derechos reservados - | Nasty Black Eye |.
             </div>
         </div>

     
            </div>
        );
    }
}

export default Footer;