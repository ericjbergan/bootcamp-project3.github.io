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
                <a class="navbar-brand" href="#">
                    Subscription&nbsp;<i class="fad fa-prescription"></i>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContents">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                        <a className="nav-link text-dark text-uppercase ml-5" href="/addnew">
                            Subscription Entry
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-dark text-uppercase ml-5" href="/Subscriptions">
                            Subscriptions
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-dark text-uppercase ml-5" onClick={this.logout}>
                            Logout
                        </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;