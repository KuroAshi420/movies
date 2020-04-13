import React from 'react'
import Card from './card'
import StarRatingComponent from 'react-star-rating-component'
import Moda from './modal'


export default function Container (){
  const [items,setItems] = React.useState([]);

  function addItem (inpt){
    setItems ( [...items,inpt])
}
    return(
      <div className="main">
        <div className="search-bar">
            <input 
            className="input" 
            type="text"
            placeholder="Enter movie name to search"
            />
            <button className="search-btn">Search</button>
            <div className="min-rating">
                <p className="parg">Mininum rating</p>
                <StarRatingComponent className="min-rating-stars"/>
                 
            </div>
        </div>
        <div>
          
          <Moda add={addItem}/>
          <Card items={items}/>
        </div>
      </div>
    )
  }
  