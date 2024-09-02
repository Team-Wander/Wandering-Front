import React from 'react';
import * as S from './style';
import { tagType } from 'types/Card';

const TagItem = ({ tag }: { tag: tagType }) => {
  const text = {
    'WALK':"산책",
    'WORRY': "고민",
    'CHAT': "잡담",
    'EXERCISE': "운동",
    'STUDY': "공부",
    'GO_OUT': "외출"
  }
  return (
    <S.Container>
      <S.Tag>#{text[tag]}</S.Tag>
    </S.Container>
  );
};

export default TagItem;
