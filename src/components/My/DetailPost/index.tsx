import React, { useState } from 'react';
import * as S from './style';
import Profile from './PostProfile';
import MateList from 'components/MateList';
import { ReportIcon } from 'svg';
import { DeclarationModal } from 'components/Modal';
import TagList from '../PostList/PostCard/TagList';
import PostHeader from './PostHeader';

const DetailPost = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <PostHeader />
      <S.Container>
        <S.PostContainer>
          <S.ApplyContainer>
            <Profile />
            <S.PostText>
              <S.Title>같이 산책 하실 분 구해요</S.Title>
              <S.Content>
                토요일에 호수공원 산책할 사람토요일에 호수공원 산책할
                사람토요일에 호수공원 산책할 사람토요일에 호수공원 산책할
                사람토요일에 호수공원 산책할 사람토요일에 호수공원 산책할
                사람토요일에 호수공원 산책할 사람토요일에 호수공원 산책할
                사람토요일에 호수공원 산책할 사람토요일에 호수공원 산책할
                사람토요일에 호수공원 산책할 사람토요일에 호수공원 산책할 사람
              </S.Content>
            </S.PostText>
            <S.SNSContainer>
              <S.SNSText>카톡 : wjdtjffl55</S.SNSText>
              <S.SNSText>디스코드 : hye_2417</S.SNSText>
              <S.SNSText>인스타그램 : hye_2417</S.SNSText>
            </S.SNSContainer>
            <S.Deadline>마감일 : 2024년 06월 17일</S.Deadline>
            <S.PostData>
              <S.Remain>2자리 남음</S.Remain>
              <MateList gender={'MALE'} grade={['ANY']} />
              <S.TagReportContainer>
                <TagList tag={['EXERCISE', 'STUDY']} />
                <S.ReportButton onClick={() => setModal(true)}>
                  <ReportIcon />
                </S.ReportButton>
              </S.TagReportContainer>
            </S.PostData>
          </S.ApplyContainer>
        </S.PostContainer>
        <S.EditButton>글 수정</S.EditButton>
        {
          <S.ApplicantList>
            <S.Line />
            {[...Array(3)].map((_, idx) => (
              <S.ApplicantContainer key={idx}>
                <S.ProfileText>
                  <S.Name>한재형</S.Name>
                  <S.Data>
                    <S.DataText>광주소프트웨어마이스터고등학교</S.DataText>
                    <S.Dot />
                    <S.DataText>1학년</S.DataText>
                    <S.Dot />
                    <S.DataText>여자</S.DataText>
                  </S.Data>
                </S.ProfileText>
                <S.OutButton>내보내기</S.OutButton>
              </S.ApplicantContainer>
            ))}
          </S.ApplicantList>
        }
      </S.Container>
      {modal && <DeclarationModal onClose={() => setModal(false)} postId={1} />}
    </>
  );
};

export default DetailPost;
