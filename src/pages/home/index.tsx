import React from 'react';
import { DeclarationModal } from 'components';
import * as S from './style';

const Home = () => {
  return (
    <S.Container>
      <DeclarationModal
        onClose={() => console.log('hi')}
        postId={1}
      />
    </S.Container>
  );
};

export default Home;
