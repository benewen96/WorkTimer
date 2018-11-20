import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ProfileDialogContent from '../container/ProfileDialogContent';
import SettingsDialogContent from '../container/SettingsDialogContent';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  closeButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullscreenDialog extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.getCurrentDialog = this.getCurrentDialog.bind(this);
  }

  getCurrentDialog() {
    switch (this.props.dialog) {
      case 'Profile':
        return <ProfileDialogContent />;
      case 'Settings':
        return <SettingsDialogContent />;
      default:
        return '';
    }
  }

  handleClose() {
    this.props.controlDialog(-1);
  }

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        fullScreen
        open={this.props.visible}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close" className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.dialog}
            </Typography>
          </Toolbar>
        </AppBar>
        {this.getCurrentDialog()}
      </Dialog>
    );
  }
}

FullscreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullscreenDialog);
