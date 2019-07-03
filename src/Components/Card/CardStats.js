import React from 'react';
import './CardStats.css';

const CardStats = props => {
  return (
<div className="stats-container">
  <div className="MP">{props.currentData.currentMP}/{props.data.maxMP}</div>
  <div className="HP">{props.currentData.currentHP}/{props.data.maxHP}</div>
  <div className="WP">{props.currentData.currentWP}/{props.data.maxWP}</div>
  <div className="box d">
    <button onClick={props.atk}>Attack</button>
  </div>
  <div className="box e">E</div>
  <div className="box f">F</div>
</div>
  )
}


export default CardStats;