import React, { useState } from 'react';
import * as S from './style';
import KebabIcon from 'svg/KebabIcon';

const PostProfile = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <S.Wrapper>
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
      <S.ModalContainer>
        <S.DetailButton onClick={() => setModal(!modal)}>
          <KebabIcon />
        </S.DetailButton>
        {modal && (
          <S.DetailModal>
            <S.WarningText>글 삭제</S.WarningText>
          </S.DetailModal>
        )}
      </S.ModalContainer>
    </S.Wrapper>
  );
};

export default PostProfile;
