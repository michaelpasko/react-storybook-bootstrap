import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/index';
import log from '../util/logger';


const asyncFunctionMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}


let preloadedState = {};
const persistedStore = localStorage.getItem('reduxStore');

if (persistedStore) {
  preloadedState = {
    todos: JSON.parse(persistedStore)
  }
}

// Setup redux devtools extension - https://medium.com/@zalmoxis/improve-your-development-workflow-with-redux-devtools-extension-f0379227ff83
const devTools = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = compose(applyMiddleware(asyncFunctionMiddleware));

// Create the Redux Store
const store = createStore(rootReducer, preloadedState, composeEnhancers);

/**
 * Abstract dispatch to add functionality to store dispatch, and create a layer of abstraction for future functionality
 * @param {*} action
 * @param {*} payload
 */
const dispatch = (action, payload) => {
  if (typeof action === 'function') {
    log.debug(`------ Dispatching thunk -----`);
    store.dispatch(action);
  } else {
    if (action && action.type && action.payload) {
      log.debug(`------ Dispatching action/payload ${action}`);
      store.dispatch({type: action.type, payload: action.payload });
    } else {
      log.debug(`------ Dispatching ${action}`);
      store.dispatch({type: action, payload });
    }
  }
};

export {
  dispatch,
  store
};