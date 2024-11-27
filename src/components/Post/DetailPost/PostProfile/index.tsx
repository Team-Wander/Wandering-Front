import React from 'react';
import * as S from './style';

const PostProfile = () => {
  return (
    <S.Profile>
      <S.ProfileImg src={''} alt="" />
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
    </S.Profile>
  );
};

export default PostProfile;
