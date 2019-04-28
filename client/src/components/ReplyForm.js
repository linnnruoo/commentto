import React from "react";
import TextField from "./TextField";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import { Typography, withStyles, Divider } from "@material-ui/core";

const ReplyForm = ({
  classes,
  name,
  replyComment,
  _onReplyTextChange,
  _onSubmitReplyClick,
  _onCancel
}) => {
  return (
    <>
      <Divider />
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <TextField
            label="Name"
            value={name}
            name="name"
            onChange={_onReplyTextChange}
            variant="standard"
          />
        </GridItem>
        <GridItem xs={12} sm={9}>
          <TextField
            label="Comment"
            value={replyComment}
            name="replyComment"
            onChange={_onReplyTextChange}
            variant="standard"
          />
        </GridItem>
        <GridItem xs={12}>
          <div className={classes.grid}>
            <Typography
              className={classes.replyText}
              variant="caption"
              onClick={_onSubmitReplyClick}
            >
              Reply
            </Typography>
            <Typography
              className={classes.cancelText}
              variant="caption"
              onClick={_onCancel}
            >
              Cancel
            </Typography>
          </div>
        </GridItem>
      </GridContainer>
    </>
  );
};

const styles = {
  grid: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  replyText: {
    color: "#f29559",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: 10
  },
  cancelText: {
    cursor: "pointer"
  }
};

export default withStyles(styles)(ReplyForm);
