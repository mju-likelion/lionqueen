/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NoticeState = {
  isShowNotice: boolean;
  noticeMessage: string;
};

const initialState: NoticeState = { isShowNotice: false, noticeMessage: '' };

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    isNotShow: state => {
      state.isShowNotice = false;
    },
    Message: (state, action: PayloadAction<string>) => {
      state.isShowNotice = true;
      state.noticeMessage = action.payload;
    },
  },
});

export const { isNotShow, Message } = noticeSlice.actions;
export default noticeSlice.reducer;
