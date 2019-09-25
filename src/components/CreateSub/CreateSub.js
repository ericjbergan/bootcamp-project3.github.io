import React from 'react';
import Wrapper from '../SubCards/Wrapper';
import './style.css'
import SearchBar from "../SearchBar/SearchBar"

function CreateSub(props) {
    return (
        <div>

            <SearchBar/>
            <div className="container">
            <form>
                <div>
                <div className="line1">
                        {/* <p>Subscription Name: </p><input type="text" size="50" name="store" onChange={props.onChange} value={props.store} /> */}
                    </div>
                    <div className="line1">

                    </div>

                    <div className="line1">
                        <p>Renewal Date:</p>
                        <input type="date" size="50" name="date" onChange={props.onChange} value={props.date} />
                    </div>
                    <div className="line1">
                        <p>Amount:</p>
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                            <input type="number" name="amount" onChange={props.onChange} value={props.amount}></input>
                        <div className="line2">
                        <form action="">
                        <select name="">
                            <option value="monthly">Monthly</option>
                            <option value="annualy">Annualy</option>
                        </select>
                        </form>
                        </div>
                        </div>
                    </div>

                </div>
                <div>
                    <p className="submitExpense"><input type="submit" onClick={props.onClick} /></p>
                </div>
            </form>
        </div >
    </div>

      
    )
}

export default CreateSub;

