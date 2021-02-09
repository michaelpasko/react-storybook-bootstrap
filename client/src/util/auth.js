import uuid from 'uuid'


import { dispatch } from '../redux/store';
import { actionTypes } from '../redux/actionTypes';
import log from './logger';

import { login } from '../redux/thunks/loginThunk';

const { AUTH_LOGIN } = actionTypes;
const login = (username, password) => {
    log.debug(`Logging in with password: ${password}`);
    /*const payload = {
        firstName: `Test1 ${username}`,
        lastName: 'LastName',
        id: uuid.v4()
    };
    dispatch(AUTH_LOGIN, payload);*/
    dispatch(login(username,password));
};

export {
    login
}