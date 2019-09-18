import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function CreateAccount() {
    return (
        <div>
            <form className="create">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter Valid Email Address" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Create Username" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Create Password" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btnSubmit" value="Create Account" />
                    <div className="to-login"><Link to="/login">Already Have Account?</Link></div>
                </div>
            </form>

        </div>
    )
}

export default CreateAccount;