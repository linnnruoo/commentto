import React from "react";
import moment from "moment";

import Paper from "./Paper";
import { Typography } from "@material-ui/core";

const Post = ({ post }) => {
  const date = moment.utc(post.date).toDate();
  const formatedDate = moment(date)
    .local()
    .format("DD MMM YYYY hh:mm");

  return (
    <Paper>
      <Typography>{post.name}</Typography>
      <Typography>{post.region}</Typography>
      <Typography>{post.comment}</Typography>
      <Typography>{formatedDate}</Typography>
    </Paper>
  );
};

export default Post;
