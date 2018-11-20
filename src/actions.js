const jwt = require('jsonwebtoken');

const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
const SET_TOKEN = 'SET_TOKEN';
const CHANGE_APP_PAGE = 'CHANGE_APP_PAGE';
const ATTEMPT_LOGOUT = 'ATTEMPT_LOGOUT';
const CONTROL_DIALOG = 'CONTROL_DIALOG';
const CHANGE_THEME = 'CHANGE_THEME';

const changeTheme = theme => ({ type: CHANGE_THEME, theme });
const attemptLogin = () => ({ type: ATTEMPT_LOGIN });
const setToken = (user, token) => ({ type: SET_TOKEN, user, token });
const changeAppPage = page => ({ type: CHANGE_APP_PAGE, page });
const attemptLogout = () => ({ type: ATTEMPT_LOGOUT });
const controlDialog = dialog => ({ type: CONTROL_DIALOG, dialog });

const login = (username, password) => (dispatch) => {
  dispatch(attemptLogin());

  return fetch('/login', {
    method: 'post',
    headers: {
      Accept: 'text/plain',
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    },
    credentials: 'include',
  })
    .then(response => response.text())
    .then((response) => {
      if (response) {
        dispatch(setToken(jwt.decode(response), response));
        dispatch(changeAppPage(1));
      }
    })
    .catch(e => console.log('error' + e));
};

const logout = () => (dispatch) => {
  fetch('/logout', {
    credentials: 'include',
  });

  dispatch(attemptLogout());
  dispatch(changeAppPage(-1));
  dispatch(controlDialog(-1));
};

module.exports = {
  ATTEMPT_LOGIN,
  SET_TOKEN,
  CHANGE_APP_PAGE,
  ATTEMPT_LOGOUT,
  CONTROL_DIALOG,
  CHANGE_THEME,
  changeTheme,
  controlDialog,
  attemptLogin,
  setToken,
  changeAppPage,
  attemptLogout,
  login,
  logout,
};
