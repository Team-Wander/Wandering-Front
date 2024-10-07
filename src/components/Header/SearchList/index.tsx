import React from 'react';
import * as S from './style';
import SearchItem from './SearchItem';

interface Props {
  word: string;
}

const SearchList = ({ word }: Props) => {
  const temp = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
    },
  ];

  return (
    <S.Wrapper>
      <S.HeaderText>
        검색{word ? '결과' : '기록'}
      </S.HeaderText>
      <S.List>
        {temp
          .filter((item) =>
            item.title.includes(word),
          )
          .map((item) => (
            <SearchItem
              key={item.id}
              title={item.title}
              author={item.author}
            />
          ))}
      </S.List>
    </S.Wrapper>
  );
};

export default SearchList;
