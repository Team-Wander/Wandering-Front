import React from 'react';
import * as S from './style';

const UserData = () => {
  return (
    <S.Wrapper>
      <S.Profile src={''} alt="" />
      <S.Text>
        <S.Name>한재형</S.Name>
        <S.Data>
          <S.DataText>광주소프트웨어마이스터고등학교</S.DataText>
          <S.Dot />
          <S.DataText>1학년</S.DataText>
          <S.Dot />
          <S.DataText>여자</S.DataText>
        </S.Data>
      </S.Text>
    </S.Wrapper>
  );
};

export default UserData;
