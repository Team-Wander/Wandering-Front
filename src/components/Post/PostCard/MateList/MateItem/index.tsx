import React from 'react';
import * as S from './style';
import {
  genderType,
  gradeType,
} from 'types/Card';

interface Props {
  data: genderType | gradeType
}

const MateItem = ({ data }: Props) => {
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
      <S.Mate>{text[data]}</S.Mate>
    </S.Container>
  );
};

export default MateItem;
