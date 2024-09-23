import React, { useState } from 'react';
import * as S from './style';

interface Props {
  text: string;
}

const ChoiceButton = ({ text }: Props) => {
  const [click, setClick] =
    useState<boolean>(false);

  return (
    <>
      <S.Button
        clicked={click}
        onClick={() => setClick(!click)}>
        {text}
      </S.Button>
    </>
  );
};

export default ChoiceButton;
