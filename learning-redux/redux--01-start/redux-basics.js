/**
 * Redux use to have basic 4 components
 * -> Store
 * -> Dispacther
 * -> Actions
 * -> Reducers
 */

 var redux = require('redux');

 const initializeState = {
   counter: 0
 };

 /**
  * Reducer
  * Reducer need to arguments the previous 'state' and the 'action'.
  * Based on the these to arguments they use to manipulate the state, and returns the new State.
  * All the dispatched actions will react to the Reducer and we need to handle what to do based on the type of an action.
 */
 var reducer = (state, action) => {
  if (state === undefined) {
    state = initializeState;
  }

  if (action.type === 'INC_COUNTER') {
    var newState = state;
    var newCounter = newState.counter + 1;
    return {
      ...newState,
      counter: newCounter
    }
  }
 };

 /**
  * Store:
  * Store need the 'Reducer' as arguments while initilazing
  */
 var store = redux.createStore(reducer);
 console.log(store.getState());

 /**
  * Subscription
  * Here we are going to the subscribe the STORE channel so that we never miss out any update :P
  */
 store.subscribe(() => {
   console.log('[Subscription]:', store.getState());
 });

 
 // Dispatching Action
 store.dispatch({type: 'INC_COUNTER'}); // here we dispatch an action to Increment the counter
//  store.dispatch({type: 'ADD_COUNTER', value: 10}); // here we dispatch an action to Add to the counter
 console.log(store.getState());


