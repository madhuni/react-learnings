/* importing our outsourced action types */
import * as actionTypes from '../actions';

/* Code for the Reducer goes here */
/* This is 'Counter' reducer, which only takes care of the 'counter' property of our
original state */

/**
 * Initialzing our State of the appliction.
 */
const initializedState = {
  counter: 0
};

const reducer = (state = initializedState, action) => {
  /* We can use the 'switch' statement for checking actions */
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    default:
      return state
      break;
  }
};

export default reducer;