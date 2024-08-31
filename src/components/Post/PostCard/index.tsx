import React, {
  useEffect,
  useState,
} from 'react';
import * as S from './style';
import { Tag } from 'types/tag';
import TagList from './TagList';
import MateList from './MateList';

const PostCard = () => {
  const [data, setData] = useState<Tag[]>([]);
  useEffect(() => {
    setData([
      {
        id: 1,
        author: 'Alice',
        title: 'Morning Walk',
        content:
          'A refreshing morning walk in the park.',
        date: new Date('2024-08-29T07:30:00Z'),
        maximum: 10,
        gender: 'ANY',
        tag: ['WALK', 'EXERCISE'],
        grade: ['ONE', 'TWO'],
      },
      {
        id: 2,
        author: 'Bob',
        title: 'Study Group',
        content:
          'Join us for a productive study session.',
        date: new Date('2024-08-30T14:00:00Z'),
        maximum: 5,
        gender: 'FEMALE',
        tag: ['STUDY', 'CHAT'],
        grade: ['THREE', 'FOUR'],
      },
      {
        id: 3,
        author: 'Charlie',
        title: 'Evening Chat',
        content:
          'Relax and chat with friends in the evening.',
        date: new Date('2024-08-31T18:00:00Z'),
        maximum: 8,
        gender: 'MALE',
        tag: ['CHAT', 'GO_OUT'],
        grade: ['FIVE', 'SIX'],
      },
    ]);
  }, []);
  return (
    <S.Container>
      {data.map((item) => (
        <div key={item.id}>
          {item.author}
          <br />
          {item.content}
          <br />
          {Number(item.date)}
          <br />
          <MateList
            gender={item.gender}
            grade={item.grade}
          />
          <br />
          {item.maximum}
          <br />
          <TagList tag={item.tag} />
          {item.title}
          <br />
          <br />
          <br />
          <br />
        </div>
      ))}
    </S.Container>
  );
};

export default PostCard;
