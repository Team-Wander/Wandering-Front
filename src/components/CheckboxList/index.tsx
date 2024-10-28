import React, { useState } from 'react';
import * as S from './style';
import CheckBox from 'svg/CheckBox';

const initialCheckboxes = [
  {
    label: '인스타그램',
    value: 'instagram',
    checked: false,
  },
  {
    label: '디스코드',
    value: 'discord',
    checked: false,
  },
  {
    label: '카카오톡',
    value: 'kakaotalk',
    checked: false,
  },
  {
    label: '이메일',
    value: 'email',
    checked: false,
  },
];

interface CheckboxListProps {
  onChange: (selected: string[]) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ onChange }) => {
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleCheckboxChange = (index: number) => {
    setCheckboxes((prevCheckboxes) => {
      const newCheckboxes = [...prevCheckboxes];
      newCheckboxes[index].checked = !newCheckboxes[index].checked;

      const selectedValues = newCheckboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      onChange(selectedValues);

      return newCheckboxes;
    });
  };

  return (
    <div>
      {checkboxes.map((checkbox, index) => (
        <S.CheckboxContainer key={checkbox.value}>
          <S.CheckboxWrapper>
            <S.StyledCheckbox
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <S.CheckboxLabel checked={checkbox.checked}>
              {checkbox.checked && <CheckBox />}
            </S.CheckboxLabel>
          </S.CheckboxWrapper>
          <S.LabelText>{checkbox.label}</S.LabelText>
        </S.CheckboxContainer>
      ))}
    </div>
  );
};

export default CheckboxList;
