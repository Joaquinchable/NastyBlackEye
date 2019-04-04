import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navegacion extends Component {
    render() {
        return (
            <div className="barnav-container">
                <nav class="menu">
                
                    <ul class="navegacion">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/exposiciones">Exposiciones</Link></li>
                    <li><Link to="/biofoto">Biofoto</Link></li>
                   </ul>
            
            </nav>
            </div>
        );
    }
}

export default Navegacion;