import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/TextField/TextField";
import PinCodeField from "./PinCodeField";
import React from "react";

import FormButtons from './FormButtons';

const Form = ({ classes, type, onChange, handleClose, handleSubmit, pinFailed }) => {

  if (type === 'live') {
    return (
      <div>
        <DialogTitle>Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the following details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Full name"
            type="text"
            fullWidth
            required
            onChange={onChange}
          />
          <TextField
            margin="dense"
            name="viewers"
            label="Number of people watching"
            type="tel"
            fullWidth
            required
            onChange={onChange}
          />
          <PinCodeField classes={classes} pinFailed={pinFailed} onChange={onChange}/>
        </DialogContent>
        <FormButtons handleClose={handleClose} handleSubmit={handleSubmit}/>
      </div>
    )
  } else {
    return (
      <div>
        <DialogTitle>Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the PIN code
          </DialogContentText>
          <PinCodeField classes={classes} pinFailed={pinFailed} onChange={onChange} autoFocus/>
        </DialogContent>
        <FormButtons handleClose={handleClose} handleSubmit={handleSubmit}/>
      </div>
    )
  }
};

export default Form;
