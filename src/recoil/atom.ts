import { atom } from 'recoil';

export const EnterInformationModalPage = atom({
  key: 'modalPage',
  default: 0,
});

export const EnterInformationState = atom({
  key: 'EnterInformationState',
  default: {
    school: '',
    grade: '',
    location: '',
    contact: '',
  },
});
