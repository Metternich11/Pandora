import React, { Component } from 'react';
import Card from './Card';

const WesenData = require('../../Wesen/Wesen.json');

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.attributes = WesenData[props.wesen];
    this.state = {
      currentMP: this.attributes.maxMP,
      currentHP: this.attributes.maxHP,
      currentWP: 5
    };
  }

  atk = () => {
    this.setState({
      currentWP: this.state.currentWP - 2
    });
  };
  render() {
    return <Card data={this.attributes} currentData={this.state} atk={this.atk}/>
  }
}

export default CardContainer;