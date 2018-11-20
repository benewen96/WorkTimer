import { combineReducers } from 'redux';
import {
  ATTEMPT_LOGIN,
  SET_TOKEN,
  CHANGE_APP_PAGE,
  ATTEMPT_LOGOUT,
  CONTROL_DIALOG,
  CHANGE_THEME,
  SET_TRANSACTIONS,
} from './actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return {
        ...state,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case SET_TOKEN:
      return {
        authed: true,
        token: action.token,
        user: action.user,
      };
    case ATTEMPT_LOGOUT:
      return {};
    default:
      return state;
  }
};

const page = (state = -1, action) => {
  switch (action.type) {
    case CHANGE_APP_PAGE:
      return action.page;
    default:
      return state;
  }
};

const dialog = (state = -1, action) => {
  switch (action.type) {
    case CONTROL_DIALOG:
      return action.dialog;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  user, page, dialog,
});

export default rootReducer;
