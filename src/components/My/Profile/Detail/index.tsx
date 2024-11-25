import React, { useState } from 'react';
import * as S from './style';
import KebabIcon from 'svg/KebabIcon';
import Portal from 'components/Portal';
import ImageChange from 'components/Modal/ImageChange';

const Detail = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);

  return (
    <>
      <S.Wrapper>
        <S.Button onClick={() => setModal(!modal)}>
          <KebabIcon />
        </S.Button>
        {modal && (
          <S.DetailModal>
            <S.Text onChange={() => setChange(true)}>프로필 변경</S.Text>
            <S.WarningText>로그아웃</S.WarningText>
          </S.DetailModal>
        )}
      </S.Wrapper>
      {change && (
        <Portal onClose={() => setChange(false)}>
          <ImageChange onClose={() => setChange(false)} />
        </Portal>
      )}
    </>
  );
};

export default Detail;
