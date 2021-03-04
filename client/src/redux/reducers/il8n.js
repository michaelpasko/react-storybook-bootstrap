import { INTL_CHANGE_LANGUAGE } from '../actionTypes';
import log from '../../util/logger';
import il8n from '../../util/il8n';

  
export default function il8nReducer(state = {}, action) {

    log.info('======== il8nReducer Reducer called ==============')
    log.debug(action);
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case INTL_CHANGE_LANGUAGE: {
          const locale = action && action.payload ? action.payload : null;
          if (locale) {
            log.info(`Change the locale for i8ln to ${locale}`);
            il8n.changeLanguage(locale);
          } else {
            log.info(`locale for i8ln not found`);
          }
          return {
            // that has all the existing state data
            ...state, isGerman: locale && locale === 'ger' ? true : false
          };
        }
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
  }