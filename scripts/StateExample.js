import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      count: 0,
      presses: 0
    };
  },

  increase() {
    this.setState({
      count: this.state.count + 1,
      presses: this.state.presses + 1
    });
  },

  decrease() {
    this.setState({
      count: this.state.count - 1,
      presses: this.state.presses + 1
    });
  },

  reset() {
    this.setState({
      count: 0,
      presses: 0
    });
  },

  render() {
    return (
      <div>

        <button onClick={this.decrease}>-1</button>
        <button onClick={this.increase}>+1</button>

        <p>Count: {this.state.count}</p>
        <p>Total presses: {this.state.presses}</p>

        <button onClick={this.reset}>Reset</button>

      </div>
    );
  }
});
