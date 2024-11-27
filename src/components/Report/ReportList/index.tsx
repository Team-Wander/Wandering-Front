import * as S from './style';
import React, { useEffect, useState } from 'react';
import ReportCard from '../ReportCard';
import reportPost from 'types/reportPost';
import { authInstance } from 'api/axios';

const ReportList = () => {
  // const data: reportPost[] = [
  //   {
  //     id: 1,
  //     author: '한재형',
  //     title: '산책할래?',
  //     author_school: 'gsm',
  //     author_gender: 'MALE',
  //     author_grade: 'TWO',
  //     content: 'description',
  //     date: new Date('2024-09-04'),
  //     maximum: 4,
  //     gender: 'FEMALE',
  //     type: ['ABUSE', 'NSFW'],
  //     grade: ['THREE', 'TWO'],
  //     tag: ['STUDY', 'CHAT'],
  //   },
  // ];

  const [posts, setPosts] = useState<reportPost[]>([]);

  const getData = async () => {
    try {
      console.log(process.env.REACT_APP_API);
      const data: reportPost[] = await authInstance.get('/admin/dec_info');
      data.map((item) => setPosts((prev) => [item, ...prev]));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Wrapper>
      {posts.length > 0 ? (
        posts.map((report: reportPost, idx) => (
          <ReportCard
            key={idx}
            author={report.author}
            author_gender={report.author_gender}
            title={report.title}
            author_school={report.author_school}
            author_grade={report.author_grade}
            gender={report.author_gender}
            type={report.type}
            grade={report.grade}
            tag={report.tag}
          />
        ))
      ) : (
        <p>신고 게시물이 없습니다</p>
      )}
    </S.Wrapper>
  );
};

export default ReportList;
