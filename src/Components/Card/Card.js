import React from 'react';
import './Card.css';
import CardStats from './CardStats';

const Card = props => {
  const image = require('../../Wesen/images/' + props.data.image);
  return (
    <div className="card-container">
      <h2>{props.data.name}</h2>
      <img className="image" src={image} alt={props.data.name} />
      <div className="stats">
        <CardStats data={props.data} atk={props.atk} currentData={props.currentData}/>
      </div>
    </div>
  )
}

export default Card;