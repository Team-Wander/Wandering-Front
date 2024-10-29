import React from 'react';
import * as S from './style';
import { LeftArrow } from 'svg';
import { useNavigate } from 'react-router-dom';

const PostHeader = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.HomeButton onClick={() => navigate(`/`)}>
        <LeftArrow />
      </S.HomeButton>
      <S.Text>글쓰기</S.Text>
      <S.Empty />
    </S.Container>
  );
};

export default PostHeader;
