import React from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import PinError from './PinError';

const PinCodeField = ({ classes, pinFailed, onChange, autoFocus }) => (
  <div>
    <TextField
      autoFocus={autoFocus}
      margin="dense"
      name="pin"
      label="PIN Code"
      type="tel"
      pattern="[0-9]*"
      fullWidth
      required
      onChange={onChange}
    />
    { pinFailed ? <PinError classes={classes}/> : '' }
  </div>
);

export default PinCodeField;
