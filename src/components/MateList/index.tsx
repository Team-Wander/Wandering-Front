import React from 'react';
import * as S from './style';
import Card from 'types/Card';
import MateItem from './MateItem';

const MateList = ({ grade, gender }: Pick<Card, 'grade' | 'gender'>) => {
  const list = [...grade];
  return (
    <S.Container>
      {list.map((item, index) => (
        <MateItem label="학년" key={index} data={item} />
      ))}
      <MateItem label="성별" data={gender} />
    </S.Container>
  );
};

export default MateList;
