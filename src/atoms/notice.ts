import { atom } from 'recoil';

export const noticeMessage = atom({
  key: 'noticeMessage',
  default: '',
});

export const isShowNotice = atom({
  key: 'isShowNotice',
  default: false,
});
