import React, { Component } from "react";
import moment from "moment";

import Paper from "./Paper";
import { Typography } from "@material-ui/core";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      isReplyBoxOpen: false
    };
    this._onOpen = this._onOpen.bind(this);
    this._onCancel = this._onCancel.bind(this);
  }

  _onOpen = () => {
    this.setState({ isReplyBoxOpen: true });
  };

  _onCancel = () => {
    this.setState({ isReplyBoxOpen: false });
  };

  render() {
    const { post } = this.props;
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
  }
}

export default Post;
