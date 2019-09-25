import React from 'react';
import Wrapper from '../SubCards/Wrapper';
import './style.css'

function CreateSub(props) {
    return (
        <Wrapper>
            <div className="container">
                <form>
                    <div>
                        <div className="line1">
                            <p>Subscription Name: </p><input type="text" size="50" name="name" 
                            onChange={props.onChange} value={props.name} />
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
                            <div>
                                <p className="submitSub"><input type="submit" onClick={props.onClick} /></p>
                            </div>

                    </div>
                </form>
            </div >
        </Wrapper>

    )
}

export default CreateSub;

