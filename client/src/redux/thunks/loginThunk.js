import http from '../../util/http'
import log from '../../util/logger';
import { AUTH_AUTHENTICATED, AUTH_LOGOUT } from '../../redux/actionTypes';

// Write a synchronous outer function that receives the `text` parameter:
const login = (username, password) => {
  // And then creates and returns the async thunk function
  log.debug('Logging into server.');
  return async function saveNewTodoThunk(dispatch, getState) {
    // const testState = getState();
    // Now we can use the text value and send it to the server
    const loginAPI = { username, password };
    log.debug(`Calling login server for ${loginAPI.username}`);
    const response = await http.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: AUTH_AUTHENTICATED, payload: response })
  }
};

const logout = () => {
  return async function saveNewTodoThunk(dispatch, getState) {
    dispatch({ type: AUTH_LOGOUT })
  }
}
export {
  login,
  logout
}