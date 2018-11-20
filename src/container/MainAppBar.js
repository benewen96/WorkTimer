import { connect } from 'react-redux';
import { logout, controlDialog } from '../actions';
import MainAppBar from '../components/MainAppBar';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  controlDialog: index => dispatch(controlDialog(index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MainAppBar);
