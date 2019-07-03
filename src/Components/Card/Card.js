import React from 'react';
import './Card.css';
import harpye from '../../images/harpye.png'

import CardStats from './CardStats';

const Card = props => {
  return (
    <div className="card-container">
      <h2>Harpye - Wesen</h2>
      <img className="image" src={harpye} alt="harpye" />
      <div className="stats">
        <CardStats />
      </div>
    </div>
  )
}

export default Card;