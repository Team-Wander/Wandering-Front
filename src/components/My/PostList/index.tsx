import React from 'react';
import * as S from './style';
import PostHeader from './PostHeader';
import PostCard from './PostCard';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <PostHeader />
      <S.List>
        {[...Array(8)].map((_, idx) => (
          <div key={idx} onClick={() => navigate('edit/1')}>
            <PostCard
              author="한재형"
              author_gender="MALE"
              author_grade="ONE"
              author_school="광주소프트웨어마이스터고등학교"
              gender="MALE"
              grade={['ONE']}
              tag={['WALK']}
              title="제목"
              content="내용"
              date={new Date('2024-07-20')}
            />
          </div>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default PostList;
