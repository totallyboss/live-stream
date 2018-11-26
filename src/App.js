import React, { Component } from 'react';
import 'typeface-roboto';
import withStyles from 'react-jss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const API = "http://localhost:4000/links";

const styles = {
  '@global body': {
    backgroundColor: '#EEEEEE',
    color: '#444'
  },
  root: {
    textAlign: 'left'
  },
  list: {
    listStyle: 'none',
    margin: '0',
    padding: '0',

    'li': {
      margin: '0 0 20px 0'
    }
  },
  button: {
    margin: '20px',
    '@media (min-width: 1024px)': {
      margin: '20px'
    }
  }
};

const LiveStreamButton = ({ classes }) => (
  <Button
    variant="contained"
    size="large"
    color="primary"
    className={classes.button}
    target="_blank"
    href="http://www.youtube.com">
    Watch Now
  </Button>
);

class App extends Component {

  state = {
    open: false,
    liveVideoAvailable: false,
    isLoading: false,
    name: '',
    viewers: ''
  };

  postData = (data) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    return fetch(API, options)
      .then((response) => response.json)
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    const { name, viewers } = this.state;

    this.postData({"name": name, "viewers": viewers});
    this.setState({
      liveVideoAvailable: true
    })
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, liveVideoAvailable } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ul className={classes.list}>
          <li>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.button}
              onClick={this.handleClickOpen}>
              One
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              target="_blank"
              href="http://www.youtube.com">
              Two
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              target="_blank"
              href="http://www.youtube.com">
              Three
            </Button>
          </li>
        </ul>

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Dialog</DialogTitle>

          {liveVideoAvailable ?
            <DialogContent><LiveStreamButton classes={classes}/></DialogContent> :
            <div>
              <DialogContent>
                <DialogContentText>
                  This is the dialog
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  name="name"
                  label="Full name"
                  type="text"
                  fullWidth
                  required
                  onChange={this.handleChange}
                />
                <TextField
                  margin="dense"
                  name="viewers"
                  label="Number of people watching"
                  type="tel"
                  fullWidth
                  required
                  onChange={this.handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Cancel
                </Button>
                <Button onClick={this.handleSubmit} color="primary">
                Submit
                </Button>
              </DialogActions>
            </div>
          }
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(App);
