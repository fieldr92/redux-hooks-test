import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testFunction } from 'actions';

const incrementCount = (dispatch, count) => dispatch(testFunction(count));

const App = () => {
  const count = useSelector(state => state.test);
  const dispatch = useDispatch();
  return <button onClick={() => incrementCount(dispatch, count)}>{count}</button>;
};

export default App;
