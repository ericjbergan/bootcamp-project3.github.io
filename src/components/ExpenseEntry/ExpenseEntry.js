import React from 'react';
import './style.css';

function expenseEntry(props) {
    console.log("ExpenseEntry: " + props.category);
    return (
        <div className="container">
            <form>
                <div>
                    <div className="line1">
                        <p>Date:</p>
                        <input type="date" size="50" name="date" onChange={props.onChange} value={props.date}/>
                    </div>
                    <div className="line1">
                        <p>Amount:</p>
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                            <input type="number" name="amount" onChange={props.onChange} value={props.amount}></input>
                        </div>
                    </div>
                    <div className="line1">
                        <p>Category: </p><input type="text" size="50" name="category" onChange={props.onChange} value={props.category}/>
                    </div>
                    <div className="line1">
                        <p>Store: </p><input type="text" size="50" name="store" onChange={props.onChange} value={props.store}/>
                    </div>
                </div>
                <div>
                    <p className="submitExpense"><input type="submit" onClick={props.onClick} /></p>
                </div>
            </form>

        </div >

    )
}

export default expenseEntry;