import DetailPost from 'components/My/DetailPost';
import React from 'react';
import * as S from './style';
import Header from 'components/Header';

const Edit = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Postioner>
        <DetailPost />
      </S.Postioner>
    </S.Wrapper>
  );
};

export default Edit;
