import React from 'react';
import Wrapper from '../SubCards/Wrapper';
import './style.css'
import SearchBar from "../SearchBar/SearchBar"

function CreateSub(props) {
    return (
        <div>
            <div className="container">
                <Wrapper>
                    <form>
                        <div>
                            <div className="search-bar">
                                <SearchBar />
                            </div>
                            <div className="line1">
                                <p>Subscription URL: </p><input type="text" size="50" name="subURL"
                                    placeholder="Paste URL here" onChange={props.onChange} value={props.subURL} />
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
                                        <select name="">
                                            <option value="monthly">Monthly</option>
                                            <option value="annualy">Annualy</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div>
                                <input type="submit" onClick={props.onClick} />
                            </div>
                    </form>
                </Wrapper>
            </div >
        </div>
    )
}

export default CreateSub;
