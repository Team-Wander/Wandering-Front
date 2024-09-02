import React from 'react';
import * as S from './style';
import { DeclarationModal } from 'components/Modal';

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
