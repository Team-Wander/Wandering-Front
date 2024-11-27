import React from 'react';
import * as S from './style';
import { reportType } from 'types/reportPost';

interface Props {
  data: reportType;
}

const MateItem = ({ data }: Props) => {
  const text = {
    PRIVATE: '개인정보노출',
    ADVERTISEMENT: '홍보성/상업적',
    ABUSE: '욕설/인신공격',
    REPEATED: '같은내용 반복작성',
    NSFW: '음란/선정성',
    ETC: '기타',
  };
  return (
    <S.Container>
      <S.Mate>{text[data]}</S.Mate>
    </S.Container>
  );
};

export default MateItem;
