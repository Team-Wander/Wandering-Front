import React from 'react';
import * as S from './style';
import PinIcon from 'svg/PinIcon';

const Location = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <PinIcon />
        평화 1동
      </S.Title>
      <S.Reset>위치 재설정</S.Reset>
    </S.Wrapper>
  );
};

export default Location;
