import React from 'react';
import './style.css'
import DashEntry from './DashEntry/DashEntry'
import DashTable from './DashTable/DashTable'
import DashSubs from './DashSubs/DashSubs'

function dashboard(props) {
    console.log("Dashboard " + props.category);
    return (
        <div className="container main">
            <div className="dashEntry boxes">
                <DashEntry
                    date={props.date}
                    amount={props.amount}
                    category={props.category}
                    store={props.store}
                    onChange={props.handleInputChange}
                    onClick={props.onClick}
                />
            </div>
            <div className="dashTable boxes">
                <DashTable 
                    table={props.tableData}
                />
            </div>
            <div className="dashSubs boxes">
                <DashSubs
                    subscriptions={props.subscriptions}
                    onChange={props.handleInputChange}
                 />
            </div>
        </div>
    )
}

export default dashboard;