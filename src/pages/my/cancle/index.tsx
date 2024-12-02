import React from 'react';
import * as S from './style';
import Header from 'components/Header';
import CanclePage from 'components/My/CanclePage';

const Cancle = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Postioner>
        <CanclePage />
      </S.Postioner>
    </S.Wrapper>
  );
};

export default Cancle;
