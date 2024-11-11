import React, { useState } from 'react';
import { PostList, Filter, Location, Header, Banner } from 'components';
import { FilterIcon } from 'svg';
import * as S from './style';

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;
