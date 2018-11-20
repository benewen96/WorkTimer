import { connect } from 'react-redux';
import { controlDialog } from '../actions';
import ProfileDialogContent from '../components/ProfileDialogContent';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  controlDialog: index => dispatch(controlDialog(index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfileDialogContent);
