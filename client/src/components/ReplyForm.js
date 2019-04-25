import React from "react";
import TextField from "./TextField";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Button from "./Button";

const ReplyForm = ({
  postId,
  name,
  replyComment,
  _onTextChange,
  _onSubmitNewReply
}) => {
  return (
    <GridContainer>
      <GridItem xs={12}>
        <TextField
          label="Name"
          value={name}
          name="name"
          onChange={_onTextChange}
        />
      </GridItem>
      <GridItem xs={12}>
        <TextField
          label="Comment"
          value={replyComment}
          name="postComment"
          multiline
          rows="5"
          onChange={_onTextChange}
        />
      </GridItem>
      <GridItem xs={12} sm={6} align="right">
        <Button
          onClick={_onSubmitNewReply(postId)}
          title="Reply to this comment!"
        />
      </GridItem>
    </GridContainer>
  );
};

export default ReplyForm;
