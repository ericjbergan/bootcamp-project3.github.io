import React from 'react';
//import './style.css';
import  SubCard  from "../SubCards/Netflix";
import Wrapper from '../SubCards/Wrapper';
import AddNew from "../SubCards/AddNew"
function Monthly(props) {
   // console.log(props.subscriptions.value);
   return (
<div className="content-container">           {/* <div>
               <div className="landing-link"><Link to="/login">Login</Link></div>
               <div className="landing-link"><Link to="/create">Create Account</Link></div>
           </div>
           <div>
               <div className="arrow-div">
                   <div className="landing-intro">
                       <p>Do you know where your money goes? What do you spend more on, groceries or cable TV? Does your phone cost you more than your electricity? Let us help you find out. We can help you keep track of your spending so you can create a budget and better control your finances.</p>
                   </div>
               </div>
          </div>*/}
           <Wrapper>

           < SubCard />
           <AddNew/>
           </Wrapper>
           <div>

          
           </div>
           
       </div>
   )
}
export default Monthly;