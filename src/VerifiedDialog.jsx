import React from 'react';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import Button from "@material-ui/core/Button/Button";

const VerifiedDialog = ({ classes, type, handleClose }) => {
  const liveLink = 'http://tiny.cc/wgtncitylivestream';
  const midweekLink = 'http://tiny.cc/wgtncitymidweek';
  const weekendLink = 'http://tiny.cc/wgtncityweekend';

  let linkFinal;

  if(type === 'live') {
    linkFinal = liveLink
  };

  if(type === 'midweek') {
    linkFinal = midweekLink
  };

  if(type === 'weekend') {
    linkFinal = weekendLink
  };

  return (
    <div>
      <DialogTitle>Thank You</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enjoy the meeting
        </DialogContentText>
        <Button
          onClick={handleClose}
          variant="contained"
          size="large"
          color="primary"
          target="_blank"
          className={classes.button}
          href={linkFinal}>
          Watch Now
        </Button>
      </DialogContent>
    </div>
  );
};

export default VerifiedDialog;
