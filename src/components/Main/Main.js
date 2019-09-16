import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Main(props) {
    return (
        <div>
            <div className="link-wrapper">
                <div className="landing-link"><Link to="/login">Login</Link></div>
                <div className="landing-link"><Link to="/create">Create Account</Link></div>
            </div>
            <div className="landing-intro">
                <p>Do you know where your money goes? What do you spend more on, groceries or cable TV? Does your phone cost you more than your electricity? Let us help you find out. We can help you keep track of your spending so you can create a budget and better control your finances.</p>
            </div>
        </div>
    )
}

export default Main;