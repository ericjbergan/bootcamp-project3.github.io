import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css';

class Navbar extends Component {

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>

                <header className="navbar navbar-expand-lg navbar-light bg-light">
                    <div>
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary"/>
                            </section>
                        ) : (
                            <section className="navbar-section">
                                <div className="collapse navbar-collapse" id="navbarSupportedContents">
                                    <ul className="navbar-nav m-auto">
                                        <il className="nav-item">
                                            <a className="nav-link text-dark text-uppercase ml-5" href="/Login">
                                            Login
                                            </a>
                                        </il>
                                        <il className="nav-item">
                                            <a className="nav-link text-dark text-uppercase ml-5" href="/signup">
                                            Sign Up
                                            </a>
                                        </il>
                                    </ul>
                                </div>
                            </section>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar