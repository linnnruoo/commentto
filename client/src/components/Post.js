import React, { Component } from "react";
import moment from "moment";

import Paper from "./Paper";
import { Typography, withStyles } from "@material-ui/core";

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
    const { post, classes } = this.props;
    const date = moment.utc(post.date).toDate();
    const formatedDate = moment(date)
      .local()
      .format("DD MMM YYYY hh:mm");

    return (
      <Paper>
        <div className={classes.grid}>
          <Typography className={classes.name}>{post.name}</Typography>
          <Typography>{post.region}</Typography>
        </div>
        <Typography className={classes.text}>{post.comment}</Typography>
        <Typography className={classes.date}>{formatedDate}</Typography>
      </Paper>
    );
  }
}

const styles = {
  grid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  name: {
    fontWeight: "bold"
  },
  text: {
    textAlign: "left"
  },
  date: {
    textAlign: "right"
  }
};

export default withStyles(styles)(Post);
