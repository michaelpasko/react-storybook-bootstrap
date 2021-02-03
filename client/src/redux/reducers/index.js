import { combineReducers } from 'redux';


// Reducers
import loginReducer from './login';


const appReducer = combineReducers({
  loginReducer,
});

export default appReducer;