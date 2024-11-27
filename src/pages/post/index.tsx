import DetailPost from 'components/Post/DetailPost';
import PostHeader from 'components/Post/DetailPost/PostHeader';
import React from 'react';
import * as S from './style';
import Header from 'components/Header';

const Post = () => {
  return (
    <>
      <Header />
      <S.Container>
        <PostHeader />
        <DetailPost />
      </S.Container>
    </>
  );
};

export default Post;
