/**
 * As we know, the action 'type' mentioned in our 'dispatcher' should be the same
 * in the 'reducer' file. Any mismatch in the two will lead to error and as the 
 * application grows and the number of actions increases, it's hard to find out the mistakes.
 * 
 * So for avoiding this, we will 'outsource' all our actions 'types' from a different file
 * and then import this file in 'Reducer' and 'dispatcher' to access the types.
 */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';