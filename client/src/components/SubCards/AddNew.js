import React from 'react';
import "./style.css"



function AddNew(){
    return (
        <div>
            <a href="/addnew">
        <div className='card' >
            <div className="img-container">
              
                    <img src= "./Images/plus.svg" height="87px"
    width="100px" alt=""/>                
            </div>
            

            <h2 text-align="center">Add New</h2>  
        </div>
            </a>
        </div>
    )
}

export default AddNew;