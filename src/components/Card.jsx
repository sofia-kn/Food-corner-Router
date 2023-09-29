import React from 'react';
import './Card.css'


function Card(props) {
  return (
 
      <div className="card__wrapper">
      <div className="card__image">
        <img src={props.image} alt="Food" className="card__image--img" />
      </div>
      <div className="card__details">
        <h3 className="card__details--name">{props.name}</h3>
        <h5 className="card__details--price">{props.price}</h5>
      </div>
    </div>
  
  )
}

export default Card;