/*eslint react/no-multi-comp: 0*/
import React, {Component, PropTypes} from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

// Dumb react component
class MyCoolReduxComponent {
  render() {
    const {value, onIncreaseClick} = this.props;

    return (
      <span>
        Value: {value}
        <br/>
        <button onClick={onIncreaseClick}>Increase</button>
      </span>
    );
  }
}
MyCoolReduxComponent.propTypes = {
  value: PropTypes.number,
  onIncreaseClick: PropTypes.func
};

// Action
const increaseAction = {type: 'increase'};

// Reducer
function counter(state={count: 0}, action) {
  switch (action.type) {
    case ('increase'):
      return {count: state.count + 1};
    default:
      return state;
  }
}

// Store
let store = createStore(counter);

// Map redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
}

// Map redux actions to component props
function mapDistpachToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

// Connect component
const ConnectedExample = connect(
  mapStateToProps,
  mapDistpachToProps)(MyCoolReduxComponent);

export default class ReduxExample extends Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);

    this.state = {
      value: 0
    };
  }
  increase() {
    this.setState({value: this.state.value + 10});
  }
  render() {
    return (
      <div>
        <h1>Redux example</h1>
        <Provider store={store}>
          {() =>
            <ConnectedExample/>
          }
        </Provider>
      </div>
    );
  }
}
