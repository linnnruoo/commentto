import React from "react";
import TextField from "./TextField";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Button from "./Button";
import { Typography } from "@material-ui/core";

const ReplyForm = ({
  name,
  replyComment,
  _onReplyTextChange,
  _onSubmitReplyClick,
  _onCancel
}) => {
  return (
    <GridContainer>
      <GridItem xs={12}>
        <TextField
          label="Name"
          value={name}
          name="name"
          onChange={_onReplyTextChange}
          variant="standard"
        />
      </GridItem>
      <GridItem xs={12}>
        <TextField
          label="Comment"
          value={replyComment}
          name="replyComment"
          onChange={_onReplyTextChange}
          variant="standard"
        />
      </GridItem>
      <GridItem xs={12} sm={6} align="right">
        <Button onClick={_onSubmitReplyClick} title="Reply" />
        <Typography onClick={_onCancel}>Cancel</Typography>
      </GridItem>
    </GridContainer>
  );
};

export default ReplyForm;
