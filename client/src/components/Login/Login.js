import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Login(props) {
    console.log(props);
    return (
        <form className="login">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="submit" className="btnSubmit" value="Login" onClick={props.changeLoggedIn} />
            </div>
            <div className="form-group">
                <a href="#" className="ForgetPwd">Forgot Password?</a>
                <div className="to-login"><Link to="/create">Create Account Here</Link></div>
            </div>
        </form>
    )
}

export default Login;