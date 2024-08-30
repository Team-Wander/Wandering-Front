import React from 'react';
import * as S from './style';
import { Tag } from 'types/tag';
import TagItem from './TagItem';

const TagList = ({ tag }: Pick<Tag, 'tag'>) => {
  return (
    <S.Container>
      {tag.map((item, index) => (
        <TagItem key={index} tag={item} />
      ))}
    </S.Container>
  );
};

export default TagList;
