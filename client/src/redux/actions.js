// redux/actions.js
import uuid from 'uuid';
import { actionTypes } from './actionTypes';
import { dispatch } from './store';

const { AUTH_LOGIN } = actionTypes;
let nextTodoId = 0;


const login = (username, password) => {
  console.log(`Logging in with password: ${password}`);
  const payload = {
      firstName: `Test1 ${username}`,
      lastName: 'LastName',
      id: uuid.v4()
  };
  dispatch(AUTH_LOGIN, payload);
};


export {
  login
}