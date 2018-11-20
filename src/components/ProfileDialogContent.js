import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import WarningIcon from '@material-ui/icons/Warning';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import LaunchIcon from '@material-ui/icons/Launch';
import FlareIcon from '@material-ui/icons/Flare';
import PeopleIcon from '@material-ui/icons/People';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

const styles = {};

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes, user } = this.props;
    return (
      <List component="nav">
        <ListItem>
          <PersonIcon color="secondary" />
          <ListItemText primary="Username" secondary={user.username} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <EmailIcon color="secondary" />
          <ListItemText primary="Email" secondary={user.email} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <LockIcon color="secondary" />
          <ListItemText primary="Password" secondary="********" />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <WarningIcon color="secondary" />
          <ListItemText primary="Delete Account" secondary="Permanent!" />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <PeopleIcon color="secondary" />
          <ListItemText primary="Friends" secondary="You have no friends" />
          <ListItemSecondaryAction>
            <IconButton aria-label="Launch">
              <LaunchIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles)(Profile);
