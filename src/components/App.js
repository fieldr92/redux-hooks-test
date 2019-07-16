import React, { Component } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { connect } from 'react-redux';
import * as actions from 'actions';

class App extends Component {
  clickButton = e => {
    e.preventDefault();
    this.props.testFunction();
  };

  render() {
    return <button onClick={this.clickButton}>Add things</button>;
  }
}

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);

// const App = () => {
//   const test = useSelector(state => state);
//   const dispatch = useDispatch();
//   return <button onClick={e => dispatch({ type: 'TEST', payload: 'test' })}>{test ? 'Hello' : 'World'}</button>;
// };

// export default App;
