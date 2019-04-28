import React, { Component } from "react";
import moment from "moment";
import * as _ from "lodash";

import Paper from "./Paper";
import ReplyForm from "./ReplyForm";
import { Typography, withStyles, Divider } from "@material-ui/core";

const getLocalDateString = date => {
  const dateMoment = moment.utc(date).toDate();
  return moment(dateMoment)
    .local()
    .format("DD MMM YYYY hh:mm");
};

class Post extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      replyComment: "",
      isReplyBoxOpen: false
    };
    this._onOpen = this._onOpen.bind(this);
    this._onCancel = this._onCancel.bind(this);
    this._onReplyTextChange = this._onReplyTextChange.bind(this);
    this._onSubmitReplyClick = this._onSubmitReplyClick.bind(this);
  }

  _onOpen = () => {
    this.setState({ isReplyBoxOpen: true });
  };

  _onCancel = () => {
    this.setState({ isReplyBoxOpen: false });
  };

  _onReplyTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _onSubmitReplyClick = () => {
    // bubble up to _onSubmitNewReply in Container
    const replyInfo = {
      pid: this.props.post.id,
      name: this.state.name,
      comment: this.state.replyComment
    };
    this.props._onSubmitNewReply(replyInfo);
    this.setState({
      comment: "",
      isReplyBoxOpen: false
    });
  };

  renderReplies = () => {
    const { replies } = this.props;
    if (replies === undefined || _.isEmpty(replies))
      return (
        <Typography gutterBottom variant="caption">
          There is no reply to this post currently
        </Typography>
      );

    return replies.map((reply, index) => {
      return (
        <Typography gutterBottom variant="caption">
          <strong>{reply.name}</strong>: {reply.comment}
        </Typography>
      );
    });
  };

  renderAddReply = () => {
    const { classes } = this.props;

    if (this.state.isReplyBoxOpen) {
      return (
        <ReplyForm
          name={this.state.name}
          replyComment={this.state.replyComment}
          _onReplyTextChange={this._onReplyTextChange}
          _onSubmitReplyClick={this._onSubmitReplyClick}
          _onCancel={this._onCancel}
        />
      );
    } else {
      return (
        <Typography className={classes.addReplyText} onClick={this._onOpen}>
          Add a reply
        </Typography>
      );
    }
  };

  render() {
    const { post, classes } = this.props;
    const formatedDate = getLocalDateString(post.date);

    return (
      <Paper>
        <div className={classes.grid}>
          <Typography className={classes.name}>{post.name}</Typography>
          <Typography>{post.region}</Typography>
        </div>
        <Typography className={classes.text}>{post.comment}</Typography>
        <Typography className={classes.date}>{formatedDate}</Typography>
        <Divider />
        <Typography
          gutterBottom
          color="primary"
          className={classes.replyHeader}
        >
          replies:
        </Typography>
        {this.renderReplies()}
        <Divider />
        {this.renderAddReply()}
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
  },
  replyHeader: {
    fontSize: 15,
    fontWeight: "bold"
  },
  addReplyText: {
    color: "#f29559",
    cursor: "pointer",
    fontWeight: "bold",
    textAlign: "right"
  }
};

export default withStyles(styles)(Post);
