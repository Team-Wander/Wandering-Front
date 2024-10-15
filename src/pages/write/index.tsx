import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './style';
import Input from 'components/Input';
import ChevronRight from 'svg/ChevronRight';
import ChoiceList from 'components/Filter/ChoiceList';
import Textarea from 'components/textarea';
import CheckboxList from 'components/CheckboxList';

interface FormValues {
  title: string;
  promise: string;
  content: string;
  max: string;
  tags: string[];
  grades: string[];
  gender: string[];
  contact: string[];
}

const Write = () => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedContact, setSelectedContact] = useState<string[]>([]);

  useEffect(() => {
    setValue('tags', selectedTags);
  }, [selectedTags, setValue]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (selectedTags.length === 0) {
      alert('태그를 최소 1개 선택해 주세요.');
      return;
    }

    const formData = {
      ...data,
      tags: selectedTags,
      grades: selectedGrades,
      gender: selectedGender,
      contact: selectedContact,
    };
    console.log('제출된 값:', formData);
  };

  const handleTagSelect = (selected: string[]) => {
    setSelectedTags(selected);
  };

  const handleGradeSelect = (selected: string[]) => {
    setSelectedGrades(selected);
  };

  const handleGenderSelect = (selected: string[]) => {
    setSelectedGender(selected);
  };

  const handleContactSelect = (selected: string[]) => {
    setSelectedContact(selected);
  };

  return (
    <S.Container>
      <S.TopBar>
        <ChevronRight />
        <p>글 작성</p>
        <div></div>
      </S.TopBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <Input
            title="제목"
            maxlength={30}
            required={true}
            placeholder="제목을 입력해 주세요"
            {...register('title', {
              required: true,
            })}
          />
          <Input
            title="약속장소"
            icon={true}
            required={true}
            placeholder="약속 장소를 입력해 주세요"
            {...register('promise', {
              required: true,
            })}
          />
          <Textarea
            title="내용"
            placeholder="내용을 입력해 주세요"
            {...register('content', {
              required: true,
            })}
          />
          <div>
            <div>태그 * </div>
            <S.List>
              <ChoiceList
                label={'태그'}
                showLabel={false}
                onChange={handleTagSelect}
              />
            </S.List>
          </div>
          <div>
            <div>구해요 - 학년 (중복 선택 가능)</div>
            <S.List>
              <ChoiceList
                label={'학년'}
                showLabel={false}
                onChange={handleGradeSelect}
              />
            </S.List>
          </div>
          <div>
            <div>구해요 - 성별 (중복 선택 가능)</div>
            <S.List>
              <ChoiceList
                label={'성별'}
                showLabel={false}
                onChange={handleGenderSelect}
              />
            </S.List>
          </div>
          <div>
            <div>연락처</div>
            <CheckboxList onChange={handleContactSelect} />
          </div>
          <Input
            title="최대인원"
            unit="명"
            placeholder="최대인원 수를 입력해 주세요"
            {...register('max', {
              required: true,
            })}
          />
        </S.InputContainer>
        <S.Button type="submit">제출하기</S.Button>
      </form>
    </S.Container>
  );
};

export default Write;
