import React from 'react';
import UserLayout from '../../huc/user';
import MyButton from '../utlis/boton';


const UserDashboard = ({ user }) => {
    return (
        <UserLayout>
            <div>

                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                        <span>{user.userData.name}</span>
                        <span>{user.userData.lastname}</span>
                        <span>{user.userData.email}</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>



            </div>
        </UserLayout>

    );
};

export default UserDashboard;