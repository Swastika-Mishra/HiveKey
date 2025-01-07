import React from "react";
import {Link} from 'react-router-dom';
import './Home.css'

const Home = () =>{
    return(
        <div>
            <div className="background">
                <div className="company-logo-overlay">
                    <h1>HiveKey</h1>
                </div>
                <div className="login-signup-box-overlay">
                    <h1>Sign In</h1>
                    <span><p>New User?&nbsp;</p><Link to="/signup">Create an Account</Link></span>
                    <br />
                    <form>
                        <input type="text" id="email-login" placeholder="Enter email"/><br/><br/>
                        <input type="submit" value="Continue" id="submit-login"></input><br /><br/>
                    </form>
                    <hr/>
                    <Link>View More</Link><br />
                    <Link>Get help signing in</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;