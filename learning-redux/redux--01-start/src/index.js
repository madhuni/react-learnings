import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Import for the Store goes here */
import { createStore } from "redux"; // imported 'createStore' from 'redux' package
/**
 * 'Provider' is the wrapper to inject our Store to the react application, it is a component.
 * We need to pass the 'store' to this 'Provider' component which then
 * can be access by its child component through props
 */
import { Provider } from "react-redux";

/*************************
 * Using a single REDUCER
**************************/
/* 
  import reducer from './store/reducer';
  const store = createStore(reducer); //created the store by passing the 'reducer' as args
 */

/************************** 
 * Using multiple REDUCERS
***************************/
/**
 * Making a rootReducer from our multiple reducers, we need to import a package
 * 'combineReducers' from 'redux'. Which will take our mutliple reducers as an object
 * argument and will produce a single reducer which can be used to create a Store.
 */
import { combineReducers } from "redux";
// Importing our both reducers
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer
});

/* Passing the new 'rootReducer' to the Store */
const store = createStore(rootReducer);

// created the store by passing the 'reducer' as args
// const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
