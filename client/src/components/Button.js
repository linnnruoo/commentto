import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const DefaultButton = ({ classes, title, ...rest }) => {
  return (
    <Button className={classes.button} align="center" {...rest}>
      {title}
    </Button>
  );
};

const styles = {
  button: {
    textTransform: "none",
    background: "#f2d492",
    color: "#ffffff",
    borderRadius: "36px",
    padding: "8px 30px",
    "&:hover": {
      background: "#f29559"
    },
    margin: "0px 5px 0px 5px",
    fontSize: 18
  }
};

export default withStyles(styles)(DefaultButton);
