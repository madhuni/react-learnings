/* importing our outsourced action types */
import * as actionTypes from '../actions';

/* Code for the Reducer goes here */
/* This is 'Result' reducer, which only takes care of the 'storeResults' property of
our original state */

/**
 * Initialzing our State of the appliction.
 */
const initializedState = {
  storeResults: []
};

const reducer = (state = initializedState, action) => {
  /* We can use the 'switch' statement for checking actions */
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        storeResults: state.storeResults.concat({ id: Date.now(), value: action.counter }) // we are modifying the original ARRAY immutabely as 'concat' method returns a new array
      }
    case actionTypes.DELETE_RESULT:
      var newArr = state.storeResults.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        storeResults: newArr
      }
    default:
      return state
      break;
  }
};

export default reducer;