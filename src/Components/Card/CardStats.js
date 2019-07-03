import React from 'react';
import './CardStats.css';

const hp = 100;
const mana = 10;

const CardStats = props => {
  return (
<div class="stats-container">
  <div class="box a">A</div>
  <div class="box b">B</div>
  <div class="box c">C</div>
  <div class="box d">D</div>
  <div class="box e">E</div>
  <div class="box f">F</div>
</div>
  )
}


export default CardStats;