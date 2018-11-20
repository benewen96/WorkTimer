import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssistantIcon from '@material-ui/icons/Assistant';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Button from '@material-ui/core/Button';

import colors from '../colors.json';

const styles = {
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
};

class BottomNavigationBar extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.getTheme = this.getTheme.bind(this);
  }

  getTheme() {
    if (this.props.user) {
      return this.props.theme;
    }
    return 'Colorless';
  }

  changePage(_, value) {
    if (this.props.user.token) {
      this.props.changeAppPage(value);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <BottomNavigation
        value={this.props.page}
        onChange={this.changePage}
        showLabels
        className={classes.root}
        style={{ backgroundColor: colors[this.getTheme()].main }}
      >
      <BottomNavigationAction label="Item 1" icon={<AssistantIcon />} />
      <BottomNavigationAction label="Item 2" icon={<AssistantIcon />} />
      <BottomNavigationAction label="Item 3" icon={<AssistantIcon />} />
      </BottomNavigation>
    );
  }
}


export default withStyles(styles)(BottomNavigationBar);
