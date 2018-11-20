import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'; import PaletteIcon from '@material-ui/icons/Palette';
import Radio from '@material-ui/core/Radio';
import HelpIcon from '@material-ui/icons/Help';
import LaunchIcon from '@material-ui/icons/Launch';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import colors from '../colors.json';

const styles = {};

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };

    this.genColorSwitcher = this.genColorSwitcher.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(theme) {
    this.props.changeTheme(theme);
  }

  genColorSwitcher() {
    return Object.entries(colors)
      .filter(color => color[0] !== 'Colorless')
      .map(color => (
        <Radio
          checked={this.props.user.theme === color[0]}
          onChange={() => this.handleChange(color[0])}
          value={color[0]}
          name={color[0]}
          aria-label={color[0]}
          key={color[0]}
          style={{ margin: '0 -2px', color: color[1].main }}
        />));
  }

  render() {
    const { classes, user } = this.props;
    return (
      <List component="nav">
        <ListItem>
          <PaletteIcon color="secondary" />
          <ListItemText primary={this.genColorSwitcher()} />
        </ListItem>
        <Divider />
        <ListItem>
          <HelpIcon color="secondary" />
          <ListItemText primary="Help" />
          <ListItemSecondaryAction>
            <IconButton aria-label="Launch">
              <LaunchIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <InfoIcon color="secondary" />
          <ListItemText primary="About" />
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

export default withStyles(styles)(Settings);
