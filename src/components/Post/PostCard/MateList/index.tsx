import React from 'react';
import * as S from './style';
import { Tag } from 'types/tag';
import MateItem from './MateItem';

const MateList = ({grade,gender}:Pick<Tag,"grade"|"gender">) => {
  const list = [...grade,gender];
  return (
    <S.Container>
      {
        list.map((item,index)=>(
          <MateItem key={index} data={item} />
        ))
      }
    </S.Container>
  );
};

export default MateList;
