import React from 'react';
import MiBoton from '../utlis/boton';
import HeaderInicio from './../Layout/HeaderInicio';
import LoginBox from './SignIn';
import { Link } from 'react-router-dom';

const RegisterLogin = () => {
    return (
        <div>
            <HeaderInicio />
            <div className="header-login">Sign In</div>
            <section>

                <div className="box">




                    <div className="right">
                        <h2> Usuario</h2>
                        <LoginBox />
                        <p>Si no tienes cuenta Registrate </p>
                        <MiBoton

                            type="default"
                            title="Crear cuenta"
                            linkTo="/SignUp"
                            addStyles={{
                                margin: "10px 0 0 0 "

                            }}
                        />
                    </div>

                </div>

            </section>
        </div>
    );
};

export default RegisterLogin;