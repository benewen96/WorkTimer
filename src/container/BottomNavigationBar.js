import { connect } from 'react-redux';
import { changeAppPage } from '../actions';
import BottomNavigationBar from '../components/BottomNavigationBar';

const mapStateToProps = state => ({
  page: state.page,
  user: state.user,
  theme: 'Colorless',
});

const mapDispatchToProps = dispatch => ({
  changeAppPage: page => dispatch(changeAppPage(page)),
});


export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigationBar);
