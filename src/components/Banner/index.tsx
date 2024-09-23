import React from 'react';
import * as S from './style';
import BannerText from 'svg/BannerText';

const Banner = () => {
  return (
    <S.Container>
      <S.Text>
        <BannerText />
      </S.Text>
    </S.Container>
  );
};

export default Banner;
