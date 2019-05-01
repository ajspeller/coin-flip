import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.flip();
  }
  flip() {
    console.log('The coin has been flipped');
  }
  render() {
    return (
      <div className='CoinFlipper'>
        <Coin />
        <button onClick={this.handleClick}>Flip Coin!</button>
      </div>
    );
  }
}

export default CoinFlipper;

// heads https://tinyurl.com/react-coin-heads-jpg
// tails https://tinyurl.com/react-coin-tails-jpg