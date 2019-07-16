import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'actions';

const incrementCount = (dispatch, count) => dispatch(increment(count));
const decrementCount = (dispatch, count) => dispatch(decrement(count));

const App = () => {
  const count = useSelector(state => state.test);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <button onClick={() => incrementCount(dispatch, count)}>+</button>
      <button onClick={() => decrementCount(dispatch, count)}>-</button>
    </>
  );
};

export default App;
