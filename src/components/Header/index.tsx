import React, { useState } from 'react';
import * as S from './style';
import {
  LogoIcon,
  BellIcon,
  NoteIcon,
  CalenderIcon,
  Profile,
  SearchIcon,
} from 'svg';
import SearchList from './SearchList';

const Header = () => {
  const [focus, setFocus] =
    useState<boolean>(false);
  const [keyword, setKeyword] =
    useState<string>('');

  return (
    <S.Container>
      <S.LogoBox>
        <LogoIcon />
      </S.LogoBox>
      <S.SearchBox>
        <S.InputBox>
          <S.Input
            value={keyword}
            placeholder="이름, 제목으로 원하는 글을 찾아보세요!"
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <S.IconBox>
            <SearchIcon />
          </S.IconBox>
        </S.InputBox>
        {focus && <SearchList word={keyword} />}
      </S.SearchBox>
      <S.ItemBox>
        <BellIcon />
        <NoteIcon />
        <CalenderIcon />
        <Profile />
      </S.ItemBox>
    </S.Container>
  );
};

export default Header;
