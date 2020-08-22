import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class CounterButton extends Component {
  // Define the intial state in a constructor
  // Arrow functions prevent binding of each function in the class

  render = () => {
    return (
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
        {/* <span className="count" style={{ fontSize: '50px' }}>
            {this.state.counter}
          </span> */}
      </div>
    );
  };

  /*   increment = () => {
      this.props.incrementMethod(this.props.by);
    };
  
    decrement = () => {
      this.props.decrementMethod(this.props.by);
    }; */
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;
