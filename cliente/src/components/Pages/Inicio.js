import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import HeaderInicio from "../Layout/HeaderInicio";
import imagen1 from "../../assets/imagen1.jpg";
import imagen2 from "../../assets/imagen2.jpg";
import imagen3 from "../../assets/imagen3.jpg";



class Inicio extends Component {
  render() {
    return (
      <div>

        <HeaderInicio />
        <div className="header-login">Nasty Black Eye</div>
        <section className="box-section-inicio">

          <div className="box-riel-foto">
            
              <Carousel >
                <Carousel.Item className="carousel-item">
                  <img
                    
                    src={imagen1}
                    alt="First slide"
                    />
                  <Carousel.Caption>
                   
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <img
                    
                    src={imagen2}
                    alt="Third slide"
                    />

                  <Carousel.Caption>
                   
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <img
                    
                    src={imagen3}
                    alt="Third slide"
                    />

                  <Carousel.Caption>
                  
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>;

                  
          

          </div>



          

         



        </section>




      </div >
    );
  }
}

export default Inicio;
