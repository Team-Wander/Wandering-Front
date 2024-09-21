import React from 'react';
import PostList from 'components/Post/PostList';
import Filter from 'components/Filter';

const Home = () => {
  return (
    <>
      <PostList />
      <Filter />
    </>
  );
};

export default Home;
