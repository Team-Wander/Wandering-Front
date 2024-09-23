import React, { useState } from 'react';
import * as S from './style';

interface Props {
  text: string;
  onClick?: (
    text: string,
    clicked: boolean,
  ) => void;
}

const ChoiceButton = ({
  text,
  onClick,
}: Props) => {
  const [clicked, setClicked] =
    useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setClicked(!clicked);
    if (onClick) onClick(text, !clicked);
  };

  return (
    <S.Button
      clicked={clicked}
      onClick={handleClick}>
      {text}
    </S.Button>
  );
};

export default ChoiceButton;
