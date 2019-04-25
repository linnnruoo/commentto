import React from "react";
import Grid from "@material-ui/core/Grid";

const GridContainer = ({ children, ...rest }) => {
  return (
    <Grid container justify="center" alignItems="center" spacing={16} {...rest}>
      {children}
    </Grid>
  );
};

export default GridContainer;
