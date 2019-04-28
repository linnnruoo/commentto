import React from "react";
import HomeComponent from "./Component";
import { connect } from "react-redux";
import { getAllPosts, createNewPost } from "../../actions/postAction";
import { getAllReplies, addNewReply } from "../../actions/replyAction";
import { batchRepliesByPost } from "../../utilities/selectors";

// TODO: check validation of the data
class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      region: "",
      postComment: ""
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
      comment: this.state.postComment
    };
    this.props.createNewPost(postInfo);
    this.setState({
      postComment: ""
    });
  };

  _onSubmitNewReply = replyInfo => {
    // submit new reply
    // where reply information is obtained from individual post section
    this.props.addNewReply(replyInfo);
  };

  render() {
    const { name, region, postComment } = this.state;
    return (
      <HomeComponent
        name={name}
        region={region}
        postComment={postComment}
        _onTextChange={this._onTextChange}
        _onSubmitNewPost={this._onSubmitNewPost}
        _onSubmitNewReply={this._onSubmitNewReply}
        posts={this.props.posts}
        replies={this.props.replies}
        groupedReplies={this.props.groupedReplies}
      />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  replies: state.replies,
  groupedReplies: batchRepliesByPost(state)
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
