import React from 'react';
import * as S from './style';
import XIcon from 'svg/XIcon';
import { Button } from 'pages/write/style';
import Input from 'components/Input';

const EnterInformationContainer = ({
  title,
  subtitle,
  onChange,
  onNext,
}: {
  title: string;
  subtitle: string;
  onChange: (value: string) => void;
  onNext: () => void;
}) => {
  const handleInputChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <S.Container>
      <div>
        <XIcon />
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <Input onChange={handleInputChange} />
      </div>
      <Button onClick={onNext}>다음</Button>
    </S.Container>
  );
};

export default EnterInformationContainer;
