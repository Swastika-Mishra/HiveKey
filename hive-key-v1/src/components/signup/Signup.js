import React from "react";
import {Link} from 'react-router-dom';
import './Signup.css'

const Signup = () =>{
    return(
        <div>
            <div className="background">
                <div className="company-logo-overlay">
                    <h1>HiveKey</h1>
                </div>
                <div className="login-signup-box-overlay">
                    <h1>Create an account</h1>
                    <hr/>
                    <span><p>Already have an acocunt?&nbsp;</p><Link to="/">Sign in</Link></span>
                    <br />
                    <form>
                        <input type="text" id="signup" placeholder="Enter email"/><br/><br/>
                        <input type="text" id="signup" placeholder="Enter password"/><br/><br/>
                        <input type="submit" value="Continue" id="submit-signup"></input><br /><br/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;