import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'actions';

const App = () => {
  const count = useSelector(state => state.test);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(count))}>+</button>
      <button onClick={() => dispatch(decrement(count))}>-</button>
    </>
  );
};

export default App;
