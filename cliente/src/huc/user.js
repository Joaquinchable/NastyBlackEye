import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderHome from '../components/Layout/HeaderHome';
const links = [
    {
        name: 'My account',
        linkTo: '/user/dashboard'
    },
    {
        name: 'User information',
        linkTo: '/user/user_profile'
    },
    {
        name: 'My Cart',
        linkTo: '/user/cart'
    },
]




const UserLayout = (props) => {

    const generateLinks = (links) => (
        links.map((item, i) => (
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        ))
    )


    return (
        <div>
            <HeaderHome />
            <div className="header-login">Mi Cuenta</div>
            <section>

                <div className="box">
                    <div className="user_container">
                        <div className="user_left_nav">
                            <h2>My account</h2>
                            <div className="links">
                                {generateLinks(links)}
                            </div>


                        </div>
                        <div className="user_right">
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(UserLayout);