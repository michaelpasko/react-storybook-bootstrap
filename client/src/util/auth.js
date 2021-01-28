import uuid from 'uuid'


import { dispatch } from '../redux/store';
import { actionTypes } from '../redux/actionTypes';

const { AUTH_LOGIN } = actionTypes;
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