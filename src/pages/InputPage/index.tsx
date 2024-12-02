import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './style';
import { Input } from 'components';

interface FormValues {
  search: string;
}

const InputPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('제출된 값:', data.search);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            icon={true}
            placeholder="이름, 제목으로 원하는 글을 찾아보세요!"
            {...register('search', {
              required: true,
            })}
          />
        </form>
      </S.InputContainer>
    </S.Container>
  );
};

export default InputPage;
