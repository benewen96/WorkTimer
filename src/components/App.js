import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import '../App.css';
import colors from '../colors.json';


import Login from '../container/Login';
import MainAppBar from '../container/MainAppBar';
import FullscreenDialog from '../container/FullscreenDialog';
import UserTheme from '../container/UserTheme';
import BottomNavigationBar from '../container/BottomNavigationBar';


const styles = {
  rootContainer: {
    flexGrow: 1,
  },
  content: {
    paddingTop: 20,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.props.initApp();
    this.getCurrentView = this.getCurrentView.bind(this);
  }

  getCurrentView() {
    switch (this.props.page) {
      case 0:
        return <div>Item 1</div>;
      case 1:
        return <div>Item 2</div>;
      case 2:
        return <div>Item 3</div>;
      default:
        return <Login />;
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.rootContainer}>
        <UserTheme>
          <FullscreenDialog />
          <MainAppBar />
          <Grid container className={classes.content}>
            <Grid item xs={12} sm={12} md={2} />
            <Grid item xs={12} sm={12}md={8}>
              {this.getCurrentView()}
            </Grid>
            <Grid item xs={12} sm={12} md={2} />
            <BottomNavigationBar />
          </Grid>
        </UserTheme>
      </div>
    );
  }
}

App.propTypes = {
  page: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
