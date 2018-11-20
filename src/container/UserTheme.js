import { connect } from 'react-redux';
import UserTheme from '../components/UserTheme';

const mapStateToProps = state => ({
  theme: state.user.theme,
});


export default connect(mapStateToProps, null)(UserTheme);
