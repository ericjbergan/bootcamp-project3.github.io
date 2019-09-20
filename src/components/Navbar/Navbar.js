import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Navbar(props) {
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
                    <Link to="/expenseEntry"
                        className={window.location.pathname === "/expenseEntry" ? "nav-link active" : "nav-link"}
                    >
                        Expense Entry
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
                <button type="submit" className="btnSubmit" onClick={props.logout} >Logout</button>
            </div>
        </nav>

    )
}

export default Navbar;