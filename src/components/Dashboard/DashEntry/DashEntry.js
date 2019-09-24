import React from 'react';
import './style.css';

function dashEntry(props) {
    return (
        <div>
            <p className="box-header">Quick Expense Entry</p>
            <input type="date" name="date" className="entryInputs"
                onChange={props.onChange} value={props.date} />
            <div className="input-group-prepend entryInputs">
                <span className="input-group-text">$</span>
                <input type="number" name="amount"
                    onChange={props.onChange} value={props.amount} placeholder="Amount" />
            </div>
            <input type="text" size="30" name="category" className="entryInputs"
                onChange={props.onChange} value={props.category} placeholder="Category" />
            <input type="text" size="30" name="store" className="entryInputs"
                onChange={props.onChange} value={props.store} placeholder="Store" />
            <div>
                <p className="submitExpense"><input type="submit" onClick={props.onClick} /></p>
            </div>
        </div>
    )
}

export default dashEntry;