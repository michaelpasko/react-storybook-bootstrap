import { AUTH_LOGIN, AUTH_AUTHENTICATED } from '../actionTypes';
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
          console.info('Logging in');
          return {
            // that has all the existing state data
            ...state,
          };
        }
        case AUTH_AUTHENTICATED: {
          log.debug('Authenticated, move to main page');
          return {
            // that has all the existing state data
            ...state,
          };
        }
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
  }