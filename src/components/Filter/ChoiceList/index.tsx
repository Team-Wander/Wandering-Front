import React, { useEffect } from 'react';
import * as S from './style';
import ChoiceButton from './ChoiceButton';
// import {
//   genderType,
//   gradeType,
//   tagType,
// } from 'types/Card';

interface Props {
  label: string;
  // data: genderType[] | tagType[] | gradeType[];
}

const ChoiceList = ({ label }: Props) => {
  const filterData = (label: string) => {
    switch (label) {
      case '태그':
        return [
          '산책',
          '고민',
          '잡담',
          '운동',
          '공부',
          '외출',
        ];
      case '성별':
        return ['남자', '여자', '성별무관'];
      case '학년':
        return [
          '1학년',
          '2학년',
          '3학년',
          '4학년',
          '5학년',
          '6학년',
          '학년무관',
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    console.log(filterData(label));
  }, [label]);
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.List>
        {filterData(label).map((item, idx) => (
          <ChoiceButton key={idx} text={item} />
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default ChoiceList;
