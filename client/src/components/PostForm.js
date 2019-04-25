import React from "react";
import TextField from "./TextField";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Button from "./Button";

const PostForm = ({
  name,
  region,
  postComment,
  _onTextChange,
  _onSubmitNewPost
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
          value={postComment}
          name="postComment"
          multiline
          rowsMax="5"
          onChange={_onTextChange}
        />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <TextField
          label="Region"
          value={region}
          name="region"
          multiline
          rowsMax="5"
          onChange={_onTextChange}
        />
      </GridItem>
      <GridItem xs={12} sm={6} align="right">
        <Button onClick={_onSubmitNewPost} title="Post your thought!" />
      </GridItem>
    </GridContainer>
  );
};

export default PostForm;
