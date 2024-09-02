import React from 'react';
import * as S from './style';
import { Card } from 'types/tag';
import TagItem from './TagItem';

const TagList = ({ tag }: Pick<Card, 'tag'>) => {
  return (
    <S.Container>
      {tag.map((item, index) => (
        <TagItem key={index} tag={item} />
      ))}
    </S.Container>
  );
};

export default TagList;
