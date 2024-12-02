import React from 'react';
import * as S from './style';
import XIcon from 'svg/XIcon';
import ChangeIcon from 'svg/ChangeIcon';

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
          <label>
            <S.Hidden type="file" />
            <S.ChangeButton>
              <ChangeIcon />
            </S.ChangeButton>
          </label>
        </S.ImageBack>
      </S.ProfileContainer>
      <S.CheckButton>확인</S.CheckButton>
    </S.Wrapper>
  );
};

export default ImageChange;
