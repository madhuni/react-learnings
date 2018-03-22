/* importing our outsourced action types */
import * as actionTypes from './actions';

/* Code for the Reducer goes here */
/* This is a SINGLE REDUCER file which is having all the
state for the application */

/**
 * Initialzing our State of the appliction.
 * 
 * For a single Reducer file, we will have all the state on the same place, but
 * when we will use different reducers for different part/functionality of our
 * application, we will then cofig the slices of the State from different reducers
 * into a single state.
 */
const initializedState = {
  counter: 0,
  storeResults: []
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
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        storeResults: state.storeResults.concat({id: Date.now(), value: state.counter}) // we are modifying the original ARRAY immutabely as 'concat' method returns a new array
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