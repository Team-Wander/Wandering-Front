import React, { useState } from 'react';
import * as S from './style';
import ChoiceButton from './ChoiceButton';

interface Props {
  label: string;
  showLabel?: boolean;
  onChange?: (selected: string[]) => void;
}

const ChoiceList = ({
  label,
  showLabel = true,
  onChange,
}: Props) => {
  const [selectedItems, setSelectedItems] =
    useState<string[]>([]);

  const filterData = (label: string) => {
    switch (label) {
      case '태그':
        return [
          '산책',
          '고민',
          '잡담',
          '운동',
          '공부',
          '외출',
        ];
      case '성별':
        return ['남자', '여자', '성별무관'];
      case '학년':
        return [
          '1학년',
          '2학년',
          '3학년',
          '4학년',
          '5학년',
          '6학년',
          '학년무관',
        ];
      default:
        return [];
    }
  };

  const handleButtonClick = (
    text: string,
    clicked: boolean,
  ) => {
    let updatedSelection;
    if (clicked) {
      updatedSelection = [...selectedItems, text];
    } else {
      updatedSelection = selectedItems.filter(
        (item) => item !== text,
      );
    }
    setSelectedItems(updatedSelection);
    if (onChange) {
      onChange(updatedSelection);
    }
  };

  return (
    <S.Wrapper>
      {showLabel && <S.Label>{label}</S.Label>}
      <S.List>
        {filterData(label).map((item, idx) => (
          <ChoiceButton
            key={idx}
            text={item}
            onClick={handleButtonClick}
          />
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default ChoiceList;
