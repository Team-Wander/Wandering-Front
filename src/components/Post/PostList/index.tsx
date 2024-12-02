import * as S from './style';
import React from 'react';
import PostCard from '../PostCard';
import Card from 'types/Card';

const PostList = () => {
  const data: Card[] = [
    {
      id: 1,
      author: 'John Doe',
      title: 'Understanding TypeScript',
      author_school: 'XYZ University',
      author_gender: 'MALE',
      author_grade: 'FOUR',
      content: 'This is a comprehensive guide to understanding TypeScript.',
      date: new Date('2024-09-04'),
      maximum: 100,
      gender: 'FEMALE',
      tag: ['STUDY', 'CHAT'],
      grade: ['THREE', 'FOUR'],
    },
    {
      id: 2,
      author: 'Jane Smith',
      title: 'Advanced React Techniques',
      author_school: 'ABC College',
      author_gender: 'FEMALE',
      author_grade: 'THREE',
      content: 'Exploring advanced techniques in React development.',
      date: new Date('2024-08-15'),
      maximum: 50,
      gender: 'MALE',
      tag: ['EXERCISE', 'STUDY'],
      grade: ['TWO', 'THREE'],
    },
    {
      id: 3,
      author: 'Alice Johnson',
      title: 'Introduction to Microservices',
      author_school: 'LMN Institute',
      author_gender: 'FEMALE',
      author_grade: 'TWO',
      content: "A beginner's guide to microservices architecture.",
      date: new Date('2024-07-20'),
      maximum: 75,
      gender: 'FEMALE',
      tag: ['WALK', 'CHAT'],
      grade: ['ONE', 'TWO'],
    },
  ];

  return (
    <S.Wrapper>
      {data.map((card: Card, idx) => (
        <PostCard
          key={idx}
          author={card.author}
          author_gender={card.author_gender}
          title={card.title}
          author_school={card.author_school}
          author_grade={card.author_grade}
          gender={card.author_gender}
          tag={card.tag}
          grade={card.grade}
        />
      ))}
    </S.Wrapper>
  );
};

export default PostList;
