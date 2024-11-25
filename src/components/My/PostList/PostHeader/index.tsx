import React from 'react';
import * as S from './style';

const PostHeader = () => {
  return (
    <S.Wrapper>
      <S.Text selected>내가 작성한 글</S.Text>
      <S.Text selected={false}>신청한 예약</S.Text>
    </S.Wrapper>
  );
};

export default PostHeader;
