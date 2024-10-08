import React, { useState } from 'react';
import * as S from './style';
import { Profile } from 'components';
import {
  gradeType,
  genderType,
} from 'types/Card';
import MateList from 'components/Post/PostCard/MateList';

interface Props {
  onClose?: () => void;
}

interface data {
  title: string;
  grade: gradeType[];
  gender: genderType;
  profile: {
    img: string;
    name: string;
    info: string;
  };
}

const ApproveAppointmentModal: React.FC<
  Props
> = ({ onClose }) => {
  const [data, setData] = useState<data>({
    title: 'hello',
    grade: ['ONE'],
    gender: 'ANY',
    profile: {
      img: '',
      name: '',
      info: '',
    },
  });

  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title onClick={onClose}>
          {data?.title}
        </S.Title>
        <MateList
          grade={data?.grade}
          gender={data?.gender}></MateList>
      </S.TitleBox>
      <S.Contents onClick={() => setData(data)}>
        <Profile />
        <S.ButtonWrapper>
          <S.Button agreement>수락</S.Button>
          <S.Button agreement={false}>
            거절
          </S.Button>
        </S.ButtonWrapper>
      </S.Contents>
    </S.Wrapper>
  );
};

export default ApproveAppointmentModal;
