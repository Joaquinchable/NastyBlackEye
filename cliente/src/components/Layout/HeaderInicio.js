import React, { Component } from 'react';
import { Link } from "react-router-dom"
class HeaderInicio extends Component {
    render() {
        return (
            <div>

                <header className="header-inicio">
                    <div className="Titulo">Nasty Black Eye</div>
                    <ul className="ul-inicio">
                        <li className="li-inicio">
                            <Link to="/home" className="a-inicio">Nasty Black Eye</Link>
                        </li>

                        <li className="li-inicio">
                            <Link to="/RegisterLogin" className="a-inicio">Login</Link>
                        </li>
                        <li className="li-inicio">
                            <Link to="/SignUp" className="a-inicio">Register</Link>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default HeaderInicio;