import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HeaderHome extends Component {
    render() {
        return (

            <header>
                <div class="header-container">
                    <div class="header-title">
                        <h1>Nasty Black Eye</h1>
                    </div>
                    <div class="header-subtitle">
                        <h5><em> {this.props.subtitle} </em></h5>
                    </div>


                </div>

                <div className="barnav-container">
                    <nav class="menu">
                        <ul class="navegacion">

                            <li>
                                <Link to="/home">Nasty </Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/exposiciones">Exposiciones</Link>
                            </li>
                            <li>
                                <Link to="/biofoto">Biofoto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>



            </header>





        );
    }
}


export default HeaderHome;

