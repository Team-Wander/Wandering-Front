import React from 'react';
import * as S from './style';
import XIcon from 'svg/XIcon';

interface Props {
  onClose: () => void;
}

const ImageChange = ({ onClose }: Props) => {
  return (
    <S.Wrapper>
      <S.ProfileContainer>
        <S.Header>
          <S.Title>프로필 변경</S.Title>
          <div onClick={onClose}>
            <XIcon />
          </div>
        </S.Header>
        <S.ImageBack>
          <S.ChangeButton type="file" />
        </S.ImageBack>
      </S.ProfileContainer>
      <S.ChangeButton />
    </S.Wrapper>
  );
};

export default ImageChange;
