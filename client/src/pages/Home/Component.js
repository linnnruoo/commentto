import React from "react";

import skills from "../../constants/skills";
import { Typography, Avatar, CircularProgress } from "@material-ui/core";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";
import Post from "../../components/Post";

import profile from "../../assets/profile.jpg";
import Paper from "../../components/Paper";
import PostForm from "../../components/PostForm";

const HomeComponent = ({
  name,
  region,
  postComment,
  _onTextChange,
  _onSubmitNewPost,
  _onSubmitNewReply,
  posts,
  replies,
  groupedReplies
}) => {
  const renderSkills = () => {
    return Object.keys(skills).map((category, index) => {
      return (
        <GridItem key={index} align="center">
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {category}
          </Typography>
          {skills[category].map((skill, index) => {
            return <Typography key={index}>{skill}</Typography>;
          })}
        </GridItem>
      );
    });
  };

  const renderPosts = () => {
    if (posts.loading || replies.loading)
      return <CircularProgress size={50} thickness={5} />;
    else
      return posts.allPosts.map((post, index) => (
        <GridItem xs={12} key={post.id}>
          <Post
            post={post}
            replies={groupedReplies[post.id]}
            _onSubmitNewReply={_onSubmitNewReply}
          />
        </GridItem>
      ));
  };

  const renderPostForm = () => {
    return (
      <Paper>
        <PostForm
          name={name}
          region={region}
          postComment={postComment}
          _onTextChange={_onTextChange}
          _onSubmitNewPost={_onSubmitNewPost}
        />
      </Paper>
    );
  };

  return (
    <div className="container" style={{ marginTop: 50, marginBottom: 50 }}>
      <GridContainer spacing={32}>
        <GridItem align="center">
          <Avatar alt="ME!" src={profile} style={{ width: 300, height: 300 }} />
        </GridItem>
        <GridItem>
          <Typography variant="h4" align="center" color="primary">
            Hi, I'm Lynn :D
          </Typography>
        </GridItem>
        <GridItem container spacing={16}>
          {renderSkills()}
        </GridItem>
        <GridItem>
          <Typography gutterBottom variant="h5" color="primary">
            Comments
          </Typography>
          <GridContainer>{renderPosts()}</GridContainer>
        </GridItem>
        <GridItem>
          <Typography gutterBottom variant="h5" color="primary">
            Leave a new comment
          </Typography>
          {renderPostForm()}
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default HomeComponent;
