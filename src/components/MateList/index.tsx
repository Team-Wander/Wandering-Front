import React from 'react';
import * as S from './style';
import { Card } from 'types/Card';
import MateItem from './MateItem';

const MateList = ({ grade, gender }: Pick<Card, 'grade' | 'gender'>) => {
  const list = [...grade, gender];
  return (
    <S.Container>
      {list.map((item, index) => (
        <MateItem key={index} data={item} />
      ))}
    </S.Container>
  );
};

export default MateList;
