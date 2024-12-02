import React from 'react';
import * as S from './style';
import { LeftArrow } from 'svg';
import { useNavigate } from 'react-router-dom';

const PostHeader = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.HomeButton onClick={() => navigate(`/my`)}>
        <LeftArrow />
      </S.HomeButton>
      <S.Text>글보기</S.Text>
      <S.Empty />
    </S.Container>
  );
};

export default PostHeader;
