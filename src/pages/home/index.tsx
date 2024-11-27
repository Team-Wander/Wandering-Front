import React, { useState } from 'react';
import {
  PostList,
  Filter,
  Location,
  Header,
  Banner,
  ReportList,
} from 'components';
import { FilterIcon, SeeReport } from 'svg';
import * as S from './style';

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [admin] = useState<boolean>(true);

  return (
    <>
      <Header />
      <S.Container>
        <Banner />
        <S.Nav>
          <Location />
          <S.ButtonWrapper>
            {admin && (
              <span onClick={() => setIsActive((prev) => !prev)}>
                <SeeReport isActive={isActive} />
              </span>
            )}
            <S.FilterContainer>
              <S.FilterButton onClick={() => setModal(true)}>
                <FilterIcon />
                필터
              </S.FilterButton>
              {modal && <Filter onClose={() => setModal(false)} />}
            </S.FilterContainer>
          </S.ButtonWrapper>
        </S.Nav>
        {admin && isActive ? <ReportList /> : <PostList />}
      </S.Container>
    </>
  );
};

export default Home;
