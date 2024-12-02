import React from 'react';
import * as S from './style';
import ReportType from 'types/reportPost';
import MateItem from './TypeItem';

const MateList = ({ type }: Pick<ReportType, 'type'>) => {
  const list = [...type];
  return (
    <S.Container>
      {list.map((item, index) => (
        <MateItem key={index} data={item} />
      ))}
    </S.Container>
  );
};

export default MateList;
