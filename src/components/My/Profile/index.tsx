import React from 'react';
import * as S from './style';
import UserData from './UserData';
import Detail from './Detail';

const Profile = () => {
  return (
    <S.Postioner>
      <UserData />
      <Detail />
    </S.Postioner>
  );
};

export default Profile;
