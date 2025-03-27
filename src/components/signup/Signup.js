import React from "react";
import {Link} from 'react-router-dom';
import './Signup.css'
import classNames from 'classnames';

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailid: '',
            password: '',
            onRegister: props.onRegister
        };
    }

    onChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    };

    onSubmitRegister = (e) =>{
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        this.props.onRegister(firstName, lastName, email, password);
    };

    render(){
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
                        <form onSubmit={this.onSubmitRegister}>
                            <input type="text" name="firstName" className="signup" placeholder="First Name" value={this.state.firstName} onChange={this.onChangeHandler}/><br/><br/>
                            <input type="text" name="lastName" className="signup" placeholder="Last Name" value={this.state.lastName} onChange={this.onChangeHandler}/><br/><br/>
                            <input type="text" name="emailid" className="signup" placeholder="Enter email" value={this.state.emailid} onChange={this.onChangeHandler}/><br/><br/>
                            <input type="text" name="password" className="signup" placeholder="Enter password" value={this.state.password} onChange={this.onChangeHandler}/><br/><br/>
                            <input type="submit" value="Continue" id="submit-signup" onClick={() => window.location.href = '/'}></input><br /><br/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};