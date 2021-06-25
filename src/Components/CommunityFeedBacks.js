// import styled from "styled-components";

// const CommunityFeedBacks = (props) => {
//     return (
//         <h1>hello weddingslk</h1>
//     );
// };


// export default CommunityFeedBacks;

import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../Actions/Feedbacks';
import Posts from './FeedBacks/FeedBacks';
import Form from './FeedBackForm/FeedBackForm';
import Header from "./Header.js"

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        {/* <Header />  */}
        <Grid container justify="space-between" alignItems="stretch" spacing={3} >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;