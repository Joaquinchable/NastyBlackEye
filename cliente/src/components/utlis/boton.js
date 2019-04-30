import React from 'react';
import { Link } from 'react-router-dom'
const MiBoton = (props) => {

    const buttons = () => {
        let template = '';


        switch (props.type) {
            case "default":
                template = <Link
                    className="link_default"
                    to={props.liknTo}
                    {...props.addStyles}

                >
                    {props.title}
                </Link>

                break;
            default:
                template = '';


        }

        return template

    }
    return (
        <div className="Mi_link">
            {buttons()}
        </div>
    );
};

export default MiBoton;