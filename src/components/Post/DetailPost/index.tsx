import React, { useState } from 'react';
import * as S from './style';
import Profile from './PostProfile';
import MateList from 'components/MateList';
import TagList from '../PostCard/TagList';
import { ReportIcon } from 'svg';
import { DeclarationModal } from 'components/Modal';

const DetailPost = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
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
        <S.ApplyButton>신청</S.ApplyButton>
      </S.Container>
      {modal && <DeclarationModal onClose={() => setModal(false)} postId={1} />}
    </>
  );
};

export default DetailPost;
