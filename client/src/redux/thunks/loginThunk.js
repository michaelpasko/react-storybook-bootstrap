import http from '../../util/http'
import log from '../../util/logger';

// Write a synchronous outer function that receives the `text` parameter:
const login = (username, password) => {
    // And then creates and returns the async thunk function
    log.debug('Logging into server.');
    return async function saveNewTodoThunk(dispatch, getState) {
      const testState = getState();
      // Now we can use the text value and send it to the server
      const loginAPI = { username, password };

    log.debug('Calling login server.');
      const response = await http.get('https://www.ovallis.com/api/v1/status');
      dispatch({ type: 'login/authenticated', payload: response })
    }
  }

export {
  login
}