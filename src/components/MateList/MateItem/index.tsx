import React from 'react';
import * as S from './style';
import { genderType, gradeType } from 'types/card';

interface Props {
  label: string;
  data: genderType | gradeType;
}

const MateItem = ({ label, data }: Props) => {
  const text = {
    ONE: '1학년',
    TWO: '2학년',
    THREE: '3학년',
    FOUR: '4학년',
    FIVE: '5학년',
    SIX: '6학년',
    MALE: '남자',
    FEMALE: '여자',
    ANY: label === '성별' ? '성별무관' : '학년무관',
  };
  return (
    <S.Container>
      <S.Mate>{text[data]}</S.Mate>
    </S.Container>
  );
};

export default MateItem;
