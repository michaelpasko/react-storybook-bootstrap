import { dispatch } from '../redux/store';
import { actionTypes } from '../redux/actionTypes';
import log from './logger';

import { login } from '../redux/thunks/loginThunk';

const { AUTH_LOGIN } = actionTypes;
const login = (username, password) => {
    log.debug(`Logging in with password: ${password}`);
    dispatch(login(username,password));
};

export {
    login
}