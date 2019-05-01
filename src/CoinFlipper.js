import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
    ]
  };
  constructor(props) {
    super(props);
    this.state = { totalFlips: 0, numHeads: 0, currentCoin: null };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    return this.flip();
  }

  flip() {
    const newCoin = choice(this.props.coins);

    this.setState((st) => {
      return {
        currentCoin: newCoin,
        totalFlips: st.totalFlips + 1,
        numHeads: newCoin.side === 'heads' ? st.numHeads + 1 : st.numHeads + 0
      };
    });
  }

  render() {
    return (
      <div className='CoinFlipper'>
        <h2>Let's flip a coin!</h2>
        {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
        <button onClick={this.handleClick}>Flip Coin!</button>
        <h4>
          Out of {this.state.totalFlips} flips, there have been{' '}
          {this.state.numHeads} heads and{' '}
          {this.state.totalFlips - this.state.numHeads} tails.
        </h4>
      </div>
    );
  }
}

export default CoinFlipper;
