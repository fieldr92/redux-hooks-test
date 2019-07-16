import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testFunction } from 'actions';

const dispatchTest = dispatch => dispatch(testFunction());

const App = () => {
  const test = useSelector(state => state.test);
  const dispatch = useDispatch();
  return <button onClick={() => dispatchTest(dispatch)}>{test ? 'World' : 'Hello'}</button>;
};

export default App;
