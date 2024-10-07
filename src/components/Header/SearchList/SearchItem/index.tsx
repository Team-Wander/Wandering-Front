import React from 'react';
import * as S from './style';
import { GoIcon } from 'svg';

interface Props {
  title: string;
  author: string;
}

const SearchItem = ({ title, author }: Props) => {
  return (
    <S.Wrapper>
      <S.Post>
        <S.Title>{title}</S.Title>
        <S.Dot />
        <S.Author>{author}</S.Author>
      </S.Post>
      <GoIcon />
    </S.Wrapper>
  );
};

export default SearchItem;
