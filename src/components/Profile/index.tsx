import React from 'react';
import * as S from './style';

interface Props {
  imgUrl: string;
  name: string;
  school: string;
}

const Profile = ({
  imgUrl,
  name,
  school,
}: Props) => {
  return (
    <S.Container>
      <S.ProfileImg
        src={imgUrl}
        alt="프로필 사진"
      />
      <S.TextBox>
        <S.Name>{name}</S.Name>
        <S.School>{school}</S.School>
      </S.TextBox>
    </S.Container>
  );
};

export default Profile;
