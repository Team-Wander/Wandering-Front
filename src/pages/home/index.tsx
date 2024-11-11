import React, { useState } from 'react';
import PostList from 'components/Post/PostList';
import Filter from 'components/Filter';
import * as S from './style';
import Location from 'components/Location';
import Header from 'components/Header';
import Banner from 'components/Banner';
import { FilterIcon } from 'svg/index';

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <Header />
      <S.Positioner>
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
      </S.Positioner>
    </>
  );
};

export default Home;
