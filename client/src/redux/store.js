import { createStore } from 'redux';
import rootReducer from './reducer';

let preloadedState = {};
const persistedStore = localStorage.getItem('reduxStore');

if (persistedStore) {
  preloadedState = {
    todos: JSON.parse(persistedStore)
  }
}

const store = createStore(rootReducer, preloadedState);

export default store;