import React, { useState } from 'react';
import * as S from './style';
import { Profile } from 'components';
import DownArrow from 'svg/DownArrow';

const Member = () => {
  const options = {
    normal: {
      option: 'normal',
      value: '정상',
    },
    '30days_ban': {
      option: '30days_ban',
      value: '30일 정지',
    },
    '15days_ban': {
      option: '15days_ban',
      value: '15일 정지',
    },
    '7days_ban': {
      option: '7days_ban',
      value: '7일 정지',
    },
    '1days_ban': {
      option: '1days_ban',
      value: '1일 정지',
    },
    indefinitely_ban: {
      option: 'indefinitely_ban',
      value: '영구 정지',
    },
  };

  const [select, setSelect] = useState(false);
  const [option, setOption] = useState(options.normal);

  return (
    <S.Container>
      <Profile imgUrl={''} name={''} school={''} />
      <S.SelectBox>
        <S.Option
          option={option.option}
          onClick={() => setSelect((prev) => !prev)}>
          {option.value}
          <DownArrow />
        </S.Option>
        <S.OptionBox selected={select}>
          {Object.entries(options).map(([option, item]) => (
            <S.Option
              key={option}
              option={option}
              onClick={() => {
                setOption(item);
                setSelect((prev) => !prev);
              }}>
              {item.value}
            </S.Option>
          ))}
        </S.OptionBox>
      </S.SelectBox>
    </S.Container>
  );
};

export default Member;
