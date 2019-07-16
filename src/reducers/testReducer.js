import { TEST } from 'actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case TEST:
      return action.payload;
    default:
      return state;
  }
};
