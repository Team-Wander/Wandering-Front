import Profile from 'components/My/Profile';
import React from 'react';
import * as S from './style';
import Header from 'components/Header';
import PostList from 'components/My/PostList';

const My = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Postioner>
        <Profile />
        <PostList />
      </S.Postioner>
    </S.Wrapper>
  );
};

export default My;
