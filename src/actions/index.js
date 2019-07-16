import { TEST } from 'actions/types';

export const increment = count => ({ type: TEST, payload: count + 1 });
export const decrement = count => ({ type: TEST, payload: count - 1 });
