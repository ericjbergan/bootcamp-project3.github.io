import React, { Component } from 'react';
import "./style.css";
var subscriptions = require("../../data/subscriptions");


class SubCard extends Component {
    render() {
        // console.log(subscriptions);
        return (
            <div className='card' >
                <div className="img-container">

                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt=""/>       */}
                    {/* {SubData.map((dataDetail, index) => {
                        return <img src={dataDetail.entertainment.netflix.image} alt="" />
                    })} */}

                </div>
                <p>Netflix</p>
                <p>10/16/19</p>
                <p>$12.99/month</p>
            </div>
        )
    }
}

export default SubCard;