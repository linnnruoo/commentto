import React from "react";
import HomeComponent from "./Component";
import { connect } from "react-redux";
import { getAllPosts, createNewPost } from "../../actions/postAction";
import { getAllReplies, addNewReply } from "../../actions/replyAction";

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
    this.props.getAllPosts();
    this.props.getAllReplies();
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
    this.props.createNewPost(postInfo);
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
        posts={this.props.posts}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  replies: state.replies
  // TODO: batch replies by postId
});

export default connect(
  mapStateToProps,
  {
    getAllPosts,
    createNewPost,
    getAllReplies,
    addNewReply
  }
)(HomeContainer);
