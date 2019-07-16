import { TEST } from 'actions/types';

export const testFunction = count => ({ type: TEST, payload: count + 1 });
