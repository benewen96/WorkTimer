import { connect } from 'react-redux';
import { changeTheme } from '../actions';
import SettingsDialogContent from '../components/SettingsDialogContent';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  changeTheme: theme => dispatch(changeTheme(theme)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SettingsDialogContent);
