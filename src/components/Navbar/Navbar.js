import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import axios from 'axios'

class Navbar extends Component {

    logout = (event) => {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav page-links">
                    <li className="nav-item">
                        <Link to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/dashboard"
                                    ? "nav-link active" : "nav-link"
                            }
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addnew"
                            className={window.location.pathname === "/addnew" ? "nav-link active" : "nav-link"}
                        >
                            Subscription Entry
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/subscriptions"
                            className={window.location.pathname === "/subscriptions" ? "nav-link active" : "nav-link"}
                        >
                            Subscriptions
                        </Link>
                    </li>
                </ul>
                <div className="form-group logout-link">
                    <button type="submit" className="btnSubmit" onClick={this.logout} >Logout</button>
                </div>
            </nav>

        )
    }
}

export default Navbar;