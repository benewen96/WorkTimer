import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
};

class MainAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleMenuClick(index) {
    this.handleClose();

    switch (index) {
      case 'Logout':
        this.props.logout();
        break;
      default:
        this.props.controlDialog(index);
    }
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img className={classes.menuButton} src="" height="36px" />
            <Typography className={classes.flex} />
            {this.props.user && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => this.handleMenuClick('Profile')}>Profile</MenuItem>
                <MenuItem onClick={() => this.handleMenuClick('Settings')}>Settings</MenuItem>
                <MenuItem onClick={() => this.handleMenuClick('Logout')}>Logout</MenuItem>
              </Menu>
            </div>
              )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainAppBar);
