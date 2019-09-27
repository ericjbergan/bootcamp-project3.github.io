import React, { Component} from 'react';
import "./style.css";
import { wrap } from 'module';
var subscriptions = require( "../../data/subscriptions");

const subscription = [
    {     
            "name": "Netflix",
            "renewal_date": "10/20/19",
            "amount": "$40.99",
            "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            "url": "https://www.netflix.com/Login?nextpage=https%3A%2F%2Fwww.netflix.com%2FYourAccount"
            },
       {
            "name": "hulu",
            "renewal_date": "",
            "amount": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
            "url": "https://auth.hulu.com/web/login"
            },
       {
            "name": "amazon prime ",
            "renewal_date": "",
            "amount": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Amazon_Prime_Logo.svg",
            "url": "https://www.amazon.com/your-account"
            },
      {
            "name": "hbo now",
            "renewal_date": "",
            "amount": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/HBONOW-logo.svg",
            "url":"https://play.hbonow.com/page/urn:hbo:page:home"
            },
        {
            "name": "sling tv",
            "renewal_date": "",
            "amount": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Sling_TV_logo.svg",
            "url": "https://oauth-client.p.sling.com/?redirect_uri=https://www.sling.com/authentication_callback&client_id=ott_server&state=eqfk0"

            },
       {
            "name": "disney +",
            "renewal_date": "",
            "amount": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
            "url": "https://preview.disneyplus.com"

            },
        
    
   ];


class SubCard extends Component {
    render(){
        console.log(subscriptions);
    return (
        // subscription.map(({i, image}) => <img key={i} src={image}  />)
        <div>
         
        {subscription.map((sub, key) => (
        <div className="card">

            <div  >
                <div className="edit_remove">
                <p className="edit">edit</p>
                <p className="remove">remove</p>
                </div>
                
            <a href ={sub.url} key={key}>

            {sub.type}
            <img src={sub.image} key={key}  width="148px" height="100px"/>

      </a>
            <p>{sub.amount}/month</p>
            <p>Subcription renews on: {sub.renewal_date}</p>
            </div>

          </div>
        ))}
      </div>
      
    )
    }
}

export default SubCard;