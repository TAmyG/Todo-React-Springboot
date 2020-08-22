import React, { Component } from 'react';
import CounterButton from './CounterButton';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />

        <span className="count" style={{ fontSize: '100px' }}>
          {this.state.counter}
        </span>

        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  increment = (by) => {
    // let aux = this.state.counter + by;
    // this.setState({ counter: aux });

    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  };

  decrement = (by) => {
    // let aux = this.state.counter + by;
    // this.setState({ counter: aux });

    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };
}

export default Counter;
