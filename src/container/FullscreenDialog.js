import { connect } from 'react-redux';
import { controlDialog } from '../actions';
import FullscreenDialog from '../components/FullscreenDialog';

const mapStateToProps = state => ({
  visible: (state.dialog !== -1),
  dialog: (state.dialog !== -1 ? state.dialog : ''),
});

const mapDispatchToProps = dispatch => ({
  controlDialog: index => dispatch(controlDialog(index)),
});


export default connect(mapStateToProps, mapDispatchToProps)(FullscreenDialog);
