import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import PrivateDataComponent from '../PrivateDataComponent';
import Navbar from '../navbar/Navbar';
import Report from '../report/Report';

const Dashboard = () => {
    const { user, logout } = useAuth0();
    return(
        <div>
            <Navbar />
            <PrivateDataComponent />
            <Report />
            {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> */}
        </div>
    );
};

export default Dashboard;
