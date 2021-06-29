import { combineReducers } from 'redux';
import log from '../../util/logger';


// Reducers
import login from './login';
import il8n  from './il8n';

/*
 * Utilized for basic logging and starting reducer
 * @param {*} state
 * @param {*} action
 */
const defaultReducer = (state = {}, action) => {
  log.debug(action);
  return { ...state };
}

const appReducer = combineReducers({
  defaultReducer,
  login,
  il8n,
});

export default appReducer;