import React from "react";
import HomeComponent from "./Component";

// TODO: check validation of the data
class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      region: "",
      postComment: "",
      replyComment: ""
    };
    this._onTextChange = this._onTextChange.bind(this);
    this._onSubmitNewPost = this._onSubmitNewPost.bind(this);
    this._onSubmitNewReply = this._onSubmitNewReply.bind(this);
  }

  componentDidMount = () => {
    // fetch all the posts
  };

  _onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _onSubmitNewPost = () => {
    // submit new post
    const postInfo = {
      name: this.state.name,
      region: this.state.region,
      postComment: this.state.postComment
    };
  };

  _onSubmitNewReply = postId => () => {
    // submit new reply
  };

  render() {
    const { name, region, postComment, replyComment } = this.state;
    return (
      <HomeComponent
        name={name}
        region={region}
        postComment={postComment}
        replyComment={replyComment}
        _onTextChange={this._onTextChange}
        _onSubmitNewPost={this._onSubmitNewPost}
        _onSubmitNewReply={this._onSubmitNewReply}
      />
    );
  }
}

export default HomeContainer;
