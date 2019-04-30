import React from 'react';
import HeaderHome from '../Layout/HeaderHome'
const PageTop = (props) => {
    return (<div>
        <HeaderHome subtitle="~Blog~" />
        <div className="header-login">Blog</div>
        <section className="section-body">


            <div className="section-container">

                {props.title}




            </div>

        </section>



    </div>

    );
};

export default PageTop;