// redux/actions.js
import {v4 as uuid} from 'uuid';
import { AUTH_LOGIN } from './actionTypes';
import log from '../util/logger';

const login = (username, password) => {
  log.debug(`Logging in with password: ${password}`);
  const payload = {
      firstName: `Test1 ${username}`,
      lastName: 'LastName',
      id: uuid.v4()
  };
  return {
    AUTH_LOGIN,
    payload
  };
};


export {
  login
}