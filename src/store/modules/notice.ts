/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NoticeState = {
  isShowNotice: boolean;
  message: string;
};

const initialState: NoticeState = { isShowNotice: false, message: '' };

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    hideNotice: state => {
      state.isShowNotice = false;
    },
    showNotice: (state, action: PayloadAction<string>) => {
      state.isShowNotice = true;
      state.message = action.payload;
    },
  },
});

export const { showNotice, hideNotice } = noticeSlice.actions;
export default noticeSlice.reducer;
