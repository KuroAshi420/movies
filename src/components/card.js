import React from 'react'



export default function Card (props){
  

    return(
      <div>
         {props.items.map((el,index) =><div className="card">
        <div className="card-rating"></div>
        <div className="card-container"></div> 
    <div className="card-name">{el.input}</div>
      </div>
         )}
      </div>
      
    )
  }
  