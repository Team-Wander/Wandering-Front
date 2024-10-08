import React from 'react';
import * as S from './style';

const Profile = () => {
  return (
    <S.Container>
      <S.ProfileImg
        src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e668b566dca82634c93f811198148a26065"
        alt="아무사진"
      />
      <S.TextBox>
        <S.Name>한재형</S.Name>
        <S.School>
          광주소프트웨어마이스터고
        </S.School>
      </S.TextBox>
    </S.Container>
  );
};

export default Profile;
