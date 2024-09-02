import React, {
  useState,
} from 'react';
import * as S from './style';
import { Card } from 'types/tag';
import TagList from './TagList';
import MateList from './MateList';

const PostCard = () => {
  const [data] = useState<Card>({
    id: 1,
    author: 'Alice',
    title: 'Morning Walk',
    author_school: '고등학교',
    author_gender: 'MALE',
    author_grade: 'ONE',
    content:
      'A refreshing morning walk in the park.',
    date: new Date('2024-08-29T07:30:00Z'),
    maximum: 10,
    gender: 'ANY',
    tag: ['WALK', 'EXERCISE'],
    grade: ['ONE', 'TWO'],
  });

  const text = {
    ONE: '1학년',
    TWO: '2학년',
    THREE: '3학년',
    FOUR: '4학년',
    FIVE: '5학년',
    SIX: '6학년',
    MALE: '남자',
    FEMALE: '여자',
    ANY: '성별무관'
  };

  return (
    <S.Container>
          <MateList
            gender={data.gender}
            grade={data.grade}
          />
          <S.AuthorDataBox>
            <S.Author>
              {data.author}
            </S.Author>
            <S.Contour/>
            <S.AuthorData>
              <span>
                {data.author_school}
              </span>
                <S.Dot/>
              <span>
                {text[data.author_grade]}
              </span>
              <S.Dot/>
              <span>
              {text[data.author_gender]}
              </span>
            </S.AuthorData>
          </S.AuthorDataBox>
          {data.title}
          <TagList tag={data.tag} />
    </S.Container>
  );
};

export default PostCard;
