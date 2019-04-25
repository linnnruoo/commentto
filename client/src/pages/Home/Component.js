import React from "react";

import skills from "../../constants/skills";
import { Typography, Grid, Avatar, CircularProgress } from "@material-ui/core";
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
  replyComment,
  _onTextChange,
  _onSubmitNewPost,
  _onSubmitNewReply,
  posts
}) => {
  const renderSkills = () => {
    return Object.keys(skills).map((category, index) => {
      return (
        <Grid key={index}>
          <Typography>{category}</Typography>
          {skills[category].map((skill, index) => {
            return <Typography key={index}>{skill}</Typography>;
          })}
        </Grid>
      );
    });
  };

  const renderPosts = () => {
    if (posts.loading) return <CircularProgress size={50} thickness={5} />;
    else
      return posts.allPosts.map((post, index) => (
        <Post key={index} post={post} />
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
    <GridContainer>
      <GridItem>
        <Avatar alt="ME!" src={profile} style={{ width: 300, height: 300 }} />
      </GridItem>
      <GridItem>{renderSkills()}</GridItem>
      <GridItem>{renderPosts()}</GridItem>
      <GridItem>{renderPostForm()}</GridItem>
    </GridContainer>
  );
};

export default HomeComponent;
