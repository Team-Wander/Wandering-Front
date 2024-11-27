import React, { useEffect } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { EnterInformationModalPage, EnterInformationState } from 'recoil/atom';
import BigLogoIcon from 'svg/BigLogoIcon';
import EnterInformationContainer from 'components/EnterInformationContainer';

const EnterInformation = () => {
  const [modalPage, setModalPage] = useRecoilState(EnterInformationModalPage);
  const [information, setInformation] = useRecoilState(EnterInformationState);

  useEffect(() => {
    if (modalPage === 4) {
      console.log('입력된 정보:', information);
    }
  }, [modalPage, information]);

  const handleChange = (key: string, value: string) => {
    setInformation((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNext = () => {
    setModalPage(modalPage + 1);
  };

  return (
    <S.Container>
      <BigLogoIcon />
      {modalPage === 0 && (
        <EnterInformationContainer
          title="학교를 알려주세요"
          subtitle="현재 재학중인 학교를 입력해 주세요"
          onChange={(value) => handleChange('school', value)}
          onNext={handleNext}
        />
      )}
      {modalPage === 1 && (
        <EnterInformationContainer
          title="학년을 알려주세요"
          subtitle="현재 재학중인 학교의 학년을 입력해 주세요"
          onChange={(value) => handleChange('grade', value)}
          onNext={handleNext}
        />
      )}
      {modalPage === 2 && (
        <EnterInformationContainer
          title="위치를 알려주세요"
          subtitle="내가 서비스를 이용할 위치를 입력해 주세요"
          onChange={(value) => handleChange('location', value)}
          onNext={handleNext}
        />
      )}
      {modalPage === 3 && (
        <EnterInformationContainer
          title="연락수단을 알려주세요"
          subtitle="내가 서비스를 이용할 연락수단을 입력해 주세요"
          onChange={(value) => handleChange('contact', value)}
          onNext={handleNext}
        />
      )}
    </S.Container>
  );
};

export default EnterInformation;
