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
    backgroundColor: '#FAFBF5',
    color: '#000',
  },
  root: {
    textAlign: 'center',
    padding: '20px',
  },
  list: {
    listStyle: 'none',
    margin: '0',
    padding: '0',

    '& li': {
      margin: '0 0 20px 0',
    }
  },
  streams: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  item: {
    margin: '20px',
    display: 'inline-block',
    width: '250px',
    height: '470px',
    border: 'solid 1px #C0C0C0',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0',
    transition: '0.5s',

    '&:hover': {
      boxShadow: '0 15px 50px #A6A6A6',
    },
  },
  details: {
    padding: '20px',
    height: '280px'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
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
    viewers: '',
    now: new Date(),
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
    const { name, viewers, now } = this.state;

    this.setState({
      now: new Date(),
    });

    this.postData({"name": name, "viewers": viewers, "time-date": now });
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
        <h1>Wellington City Congregation</h1>

        <ul className={classes.streams}>
          <li className={classes.item}>
            <div className={classes.details}>
              <h2>LIVE</h2>
              <p>Live streaming video of today's meeting</p>
            </div>
            <img className={classes.image} src='https://assetsnffrgf-a.akamaihd.net/assets/m/1102012148/univ/art/1102012148_univ_cnt_2_md.jpg' />
          </li>
          <li className={classes.item}>
            <div className={classes.details}>
              <h2>MIDWEEK</h2>
              <p>Treasures from God's word, Apply yourself to the Field Ministry, Living as Christians</p>
            </div>
            <img className={classes.image} src='https://assetsnffrgf-a.akamaihd.net/assets/m/1102012148/univ/art/1102012148_univ_cnt_3_md.jpg' />
          </li>
          <li className={classes.item}>
            <div className={classes.details}>
              <h2>WEEKEND</h2>
              <p>Public talk and Watchtower Study</p>
            </div>
            <img className={classes.image} src='https://assetsnffrgf-a.akamaihd.net/assets/m/1102012148/univ/art/1102012148_univ_cnt_1_md.jpg' />
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
