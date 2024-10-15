import React, { useState } from 'react';
import PostList from 'components/Post/PostList';
import Filter from 'components/Filter';
import * as S from './style';
import Location from 'components/Location';
import FilterIcon from 'svg/FilterIcon';
import Banner from 'components/Banner';

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <S.Container>
      <Banner />
      <S.Nav>
        <Location />
        <S.FilterContainer>
          <S.FilterButton onClick={() => setModal(true)}>
            <FilterIcon />
            필터
          </S.FilterButton>
          {modal && <Filter onClose={() => setModal(false)} />}
        </S.FilterContainer>
      </S.Nav>
      <PostList />
    </S.Container>
  );
};

export default Home;
