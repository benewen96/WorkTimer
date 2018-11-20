import { connect } from 'react-redux';
import { changeAppPage, setToken } from '../actions';
import App from '../components/App';

const jwt = require('jsonwebtoken');

const mapStateToProps = state => ({
  page: state.page,
  user: state.user,
  theme: state.user.theme,
});

const mapDispatchToProps = dispatch => ({
  initApp: () => {
    const token = fetch('/token', {
      credentials: 'include'
    })
    .then(response => response.text())
    .then((response) => {
      if (response) {
        dispatch(setToken(jwt.decode(response), response));
        dispatch(changeAppPage(1));
      }
    })
    .catch(null);
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
