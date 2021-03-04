import { combineReducers } from 'redux';


// Reducers
import login from './login';
import il8n  from './il8n';


const appReducer = combineReducers({
  login,
  il8n,
});

export default appReducer;