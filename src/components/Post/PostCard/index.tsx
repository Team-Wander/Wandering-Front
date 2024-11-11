import React from 'react';
import * as S from './style';
import { Card } from 'types/Card/card';
import TagList from './TagList';
import MateList from '../../MateList';

const PostCard = ({
  author,
  author_gender,
  author_grade,
  author_school,
  gender,
  grade,
  tag,
  title,
}: Card) => {
  const text: { [key: string]: string } = {
    ONE: '1학년',
    TWO: '2학년',
    THREE: '3학년',
    FOUR: '4학년',
    FIVE: '5학년',
    SIX: '6학년',
    MALE: '남자',
    FEMALE: '여자',
    ANY: '성별무관',
  };

  return (
    <S.Container>
      <MateList gender={gender} grade={grade} />
      <S.AuthorDataBox>
        <S.Author>{author}</S.Author>
        <S.Contour />
        <S.AuthorData>
          <span>{author_school}</span>
          <S.Dot />
          <span>{text[author_grade]}</span>
          <S.Dot />
          <span>{text[author_gender]}</span>
        </S.AuthorData>
      </S.AuthorDataBox>
      {title}
      <TagList tag={tag} />
    </S.Container>
  );
};

export default PostCard;
