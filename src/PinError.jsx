import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import React from "react";

const PinError = ({ classes }) => (
  <DialogContentText className={classes.error}>
    Incorrect PIN code
  </DialogContentText>
);

export default PinError;
