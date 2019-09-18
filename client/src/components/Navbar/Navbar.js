import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <ul className="navbar-nav">
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
                    <li className="nav-item">
                        <Link to="/login"
                            className="nav-link"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;