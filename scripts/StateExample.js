import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      count: 0
    };
  },

  increase() {
    this.setState({count: this.state.count + 1});
  },

  decrease() {
    this.setState({count: this.state.count - 1});
  },

  render() {
    return (
      <div>

        <button onClick={this.decrease}>-1</button>
        <button onClick={this.increase}>+1</button>

        <h2 style={{fontSize: this.state.count * 10}}>
          {this.state.count}
        </h2>

      </div>
    );
  }
});
