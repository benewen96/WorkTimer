import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    marginTop: '20%',
    margin: 'auto',
    width: '100%',
    maxWidth: '270px',
  },
  buttons: {
    float: 'right',
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.classes = props.classes;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    this.props.login(this.state.username, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className={this.classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Card className={this.classes.card}>
            <CardContent>
              <TextField
                value={this.state.username}
                onChange={this.handleChangeUsername}
                id="email-input"
                label="Email"
                margin="normal"
              />
              <TextField
                value={this.state.password}
                onChange={this.handleChangePassword}
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </CardContent>
            <CardActions className={this.classes.buttons}>
              <Button size="small">
              Register
              </Button>
              <Button size="small" variant="raised" color="secondary" type="submit">
              Login
              </Button>
            </CardActions>
          </Card>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default withStyles(styles)(Login);
