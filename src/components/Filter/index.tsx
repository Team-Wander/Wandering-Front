// import {
//   genderType,
//   gradeType,
//   tagType,
// } from 'types/Card';
import ChoiceList from './ChoiceList';
import * as S from './style';
import React from 'react';
import XIcon from 'svg/XIcon';

interface Props {
  onClose: () => void;
}

const Filter = ({ onClose }: Props) => {
  // const tag: tagType[] = [
  //   'WALK',
  //   'WORRY',
  //   'CHAT',
  //   'EXERCISE',
  //   'STUDY',
  //   'GO_OUT',
  // ];
  // const gender: genderType[] = [
  //   'MALE',
  //   'FEMALE',
  //   'ANY',
  // ];
  // const grade: gradeType[] = [
  //   'ONE',
  //   'TWO',
  //   'THREE',
  //   'FOUR',
  //   'FIVE',
  //   'SIX',
  //   'ANY',
  // ];

  return (
    <S.Wrapper>
      <S.FilterHeader>
        <S.Title>필터</S.Title>
        <S.CloseButton onClick={onClose}>
          <XIcon />
        </S.CloseButton>
      </S.FilterHeader>
      <ChoiceList label={'태그'} />
      <ChoiceList label={'성별'} />
      <ChoiceList label={'학년'} />
    </S.Wrapper>
  );
};

export default Filter;
