import { createStore } from 'redux';
import rootReducer from './reducer';

let preloadedState = {};
const persistedStore = localStorage.getItem('reduxStore');

if (persistedStore) {
  preloadedState = {
    todos: JSON.parse(persistedStore)
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, preloadedState, composeEnhancers);

const dispatch = (action, payload) => {
  console.info('------ Dispatching ${action}');
  store.dispatch({type: action, payload });
}
export {
  dispatch,
  store
};