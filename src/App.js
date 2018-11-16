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

class App extends Component {

  state = {
    open: false,
    liveVideoAvailable: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleSubmit = () => {
    this.setState({
      open: false,
      liveVideoAvailable: true
    })
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
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
            <Button variant="contained" size="large" color="primary" className={classes.button}>
              Two
            </Button>
          </li>
          <li>
            <Button variant="contained" size="large" color="primary" className={classes.button}>
              Three
            </Button>
          </li>
        </ul>

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is the dialog
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full name"
              type="text"
              fullWidth
              />
            <TextField
              margin="dense"
              id="viewers"
              label="Number of people watching"
              type="tel"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(App);
