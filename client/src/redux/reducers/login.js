import jwt from "jsonwebtoken";
import { AUTH_LOGIN, AUTH_AUTHENTICATED, AUTH_LOGOUT } from '../actionTypes';
import log from '../../util/logger';

const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  };
  
export default function loginReducer(state = initialState, action) {

    log.info('======== Login Reducer called ==============')
    log.debug(action);
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case AUTH_LOGIN: {
          log.info('Logging in');
          return {
            // that has all the existing state data
            ...state,
          };
        }
        case AUTH_AUTHENTICATED: {
          log.debug('Authenticated, move to main page');
          const user = {
            first: 'FirstNameTest',
            last: 'LastNameTest'
          };
          if (action.payload && action.payload.length > 0 ) {
            const name = action.payload[0].name.split(' ');
            user.first = name[0];
            user.last = name[1];
          }

          // Create JWT token
          const token = jwt.sign(user, 'password', {
            algorithm: "HS256",
            expiresIn: 600000,
          });

          return {
            // that has all the existing state data
            ...state,
            user,
            jwt: token,
          };
        }
        case AUTH_LOGOUT: {
          return {
            ...state,
            user: null,
            jwt: null
          }
        }
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
  }